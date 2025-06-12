# NotebookLM LaTeX Renderer

This Chrome extension renders both inline and block LaTeX expressions on [NotebookLM](https://notebooklm.google.com/) using KaTeX.

## Files

- `manifest.json` – Chrome extension manifest
- `content.js` – Scans the page for LaTeX delimiters (`$...$`, `\(...\)`, `$$...$$`, `\[...\]`) and renders them with KaTeX
- `katex.min.js`, `katex.min.css`, and `fonts/` – KaTeX runtime files

The KaTeX files were fetched from npm. To update them run:

```bash
npm install katex
cp node_modules/katex/dist/katex.min.js node_modules/katex/dist/katex.min.css -t .
cp -r node_modules/katex/dist/fonts .
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
