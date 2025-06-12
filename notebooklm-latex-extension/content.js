// Helper: Find all text nodes under a given node
function getTextNodes(node) {
  let textNodes = [];
  if (node.nodeType === Node.TEXT_NODE) {
    textNodes.push(node);
  } else {
    for (let child of node.childNodes) {
      textNodes = textNodes.concat(getTextNodes(child));
    }
  }
  return textNodes;
}

// Regex for inline and block LaTeX:
//  inline: $...$ or \(...\)
//  block: $$...$$ or \[...\]
// Escaped delimiters like `\$` should not be treated as math. We use
// negative lookbehind to ensure `$` tokens are not preceded by a backslash.
const latexRegex = /(?<!\\)\$\$([\s\S]+?)(?<!\\)\$\$|\\\[([\s\S]+?)\\\]|\\\((.+?)\\\)|(?<!\\)\$([^$]+?)(?<!\\)\$/g;

// Render LaTeX in a single text node
function renderLatexInNode(node) {
  const text = node.textContent;
  let match, lastIndex = 0;
  const parent = node.parentNode;
  const frag = document.createDocumentFragment();
  latexRegex.lastIndex = 0;
  let found = false;

  while ((match = latexRegex.exec(text)) !== null) {
    found = true;
    if (match.index > lastIndex) {
      frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
    }
    const latex = match[1] || match[2] || match[3] || match[4];
    const isBlock = !!(match[1] || match[2]);
    const span = document.createElement('span');
    try {
      katex.render(latex, span, { throwOnError: false, displayMode: isBlock });
    } catch (e) {
      span.textContent = match[0];
    }
    frag.appendChild(span);
    lastIndex = latexRegex.lastIndex;
  }
  if (found && lastIndex < text.length) {
    frag.appendChild(document.createTextNode(text.slice(lastIndex)));
  }
  if (found) {
    parent.replaceChild(frag, node);
  }
}

// Scan and render all LaTeX on the page
function renderAllLatex() {
  const root = document.body;
  const textNodes = getTextNodes(root);
  for (const node of textNodes) {
    renderLatexInNode(node);
  }
}

// Initial render
renderAllLatex();

// Re-render on DOM changes for dynamic content
const observer = new MutationObserver(() => {
  renderAllLatex();
});
observer.observe(document.body, { childList: true, subtree: true });
