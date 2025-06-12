# NotebookLM LaTeX Renderer

This Chrome extension renders both inline and block LaTeX expressions on [NotebookLM](https://notebooklm.google.com/) using KaTeX.

## Files

- `manifest.json` – Chrome extension manifest
- `content.js` – Scans the page for LaTeX delimiters (`$...$`, `\(...\)`, `$$...$$`, `\[...\]`) and renders them with KaTeX
- `katex.min.js`, `katex.min.css`, and `fonts/` – KaTeX runtime files

The KaTeX files were fetched from npm. To update them run:

```bash
npm install katex
cp node_modules/katex/dist/katex.min.js .
cp node_modules/katex/dist/katex.min.css .
cp -r node_modules/katex/dist/fonts .
```

## Quick start

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable *Developer mode*.
3. Click **Load unpacked** and select this directory.
4. Visit NotebookLM and math will automatically render.

### Tips

* For best results place block math (e.g. `$$...$$`) on its own line so the
  entire expression falls within a single text node. Inline math works when
  directly adjacent to other characters, but you may see fewer rendering issues
  if there is a small amount of surrounding whitespace.
* Ending a sentence with inline math like `$x^2$.` now renders correctly.
  Block math with spaces inside the delimiters (e.g. `$$ something $$`) is also
  supported.

## Packaging

Zip this folder if you prefer to distribute the extension as a single archive.

## Development

If NotebookLM dynamically updates content, the extension observes DOM changes and reruns rendering on the changed nodes.
