# NotebookLM LaTeX Renderer

This Chrome extension renders both inline and block LaTeX expressions on [NotebookLM](https://notebooklm.google.com/) using MathJax.

## Files

- `manifest.json` – Chrome extension manifest
- `content.js` – Scans the page for LaTeX delimiters (`$...$`, `\(...\)`, `$$...$$`, `\[...\]`) and renders them with MathJax
- `tex-mml-chtml.js` and `fonts/` – MathJax runtime files

The KaTeX files were fetched from npm. To update them run:

```bash
npm install mathjax
cp node_modules/mathjax/es5/tex-mml-chtml.js .
cp -r node_modules/mathjax/es5/output/chtml/fonts .
```

## Quick start

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable *Developer mode*.
3. Click **Load unpacked** and select this directory.
4. Visit NotebookLM and math will automatically render.

## Packaging

Zip this folder if you prefer to distribute the extension as a single archive.

## Development

If NotebookLM dynamically updates content, the extension observes DOM changes and reruns rendering on the changed nodes.
