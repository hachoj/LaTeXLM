function mergeMultilineDisplayMath(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let node;
  while ((node = walker.nextNode())) {
    if (node.textContent.trim() === '$$') {
      const start = node;
      const between = [];
      const remove = [];
      while ((node = walker.nextNode())) {
        if (node.textContent.trim() === '$$') {
          break;
        }
        between.push(node.textContent);
        remove.push(node);
      }
      if (!node) return; // unmatched
      remove.forEach(n => n.parentNode.removeChild(n));
      node.parentNode.removeChild(node); // closing $$
      start.textContent = '$$' + between.join('\n') + '$$';
    }
  }
}

function typeset() {
  mergeMultilineDisplayMath();
  MathJax.typesetPromise();
}

if (window.MathJax) {
  MathJax.startup.promise.then(() => {
    typeset();
    const observer = new MutationObserver(() => typeset());
    observer.observe(document.body, { childList: true, subtree: true });
  });
}
