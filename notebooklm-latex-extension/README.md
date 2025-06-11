# NotebookLM LaTeX Renderer

This Chrome extension renders both inline and block LaTeX expressions on [NotebookLM](https://notebooklm.google.com/) using KaTeX.

## Files

- `manifest.json` – Chrome extension manifest
- `content.js` – Scans the page for LaTeX delimiters (`$...$`, `\(...\)`, `$$...$$`, `\[...\]`) and renders them with KaTeX
- `katex.min.js`, `katex.min.css`, and `fonts/` – KaTeX runtime files (download separately)

This directory does not include the KaTeX runtime. Download it yourself using `npm`:

```bash
npm install katex
cp node_modules/katex/dist/katex.min.js node_modules/katex/dist/katex.min.css -t .
cp -r node_modules/katex/dist/fonts .
```

Alternatively, grab the same files from a [KaTeX release](https://github.com/KaTeX/KaTeX/releases) and copy them here.

## Setup

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable *Developer mode*.
3. Ensure `katex.min.js`, `katex.min.css`, and the `fonts/` directory are present in this folder.
4. Click **Load unpacked** and select this directory.
5. Navigate to NotebookLM and the extension will automatically render both inline and block LaTeX.

## Development

If NotebookLM dynamically updates content, the extension observes DOM changes and reruns rendering on the changed nodes.
