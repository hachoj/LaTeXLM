function typeset() {
  MathJax.typesetPromise();
}

if (window.MathJax) {
  MathJax.startup.promise.then(() => {
    typeset();
    const observer = new MutationObserver(() => typeset());
    observer.observe(document.body, { childList: true, subtree: true });
  });
}
