# NotebookLM LaTeX Renderer

This Chrome extension renders both inline and block LaTeX expressions on [NotebookLM](https://notebooklm.google.com/) using MathJax. Block formulas may span multiple lines.

## Files

- `manifest.json` – Chrome extension manifest
- `content.js` – Invokes MathJax to typeset LaTeX on the page
- `mathjax.js` – Bundled MathJax runtime

The MathJax file was fetched from npm. To update it run:

```bash
npm install mathjax-full
cp node_modules/mathjax-full/es5/tex-chtml.js mathjax.js
```

## Quick start

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable *Developer mode*.
3. Click **Load unpacked** and select this directory.
4. Visit NotebookLM and math will automatically render.

***IMPORTANT***


Add 
```
When making math expressions, use MathJax. In MathJax, for all uses of "_", put spaces on both ends, so you have “ _ ". For example, to say $x _ {r}$, instead say $x _ {r}$. For block math, delimiter, newline, math, newline, delimiter.
```
to your custom prompt for this to work.

## Packaging

Zip this folder if you prefer to distribute the extension as a single archive.

## Development

If NotebookLM dynamically updates content, the extension observes DOM changes and reruns rendering on the changed nodes.
