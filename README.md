# LaTeXLM

This repository contains a Chrome extension for rendering LaTeX on [NotebookLM](https://notebooklm.google.com/). The extension supports both inline and block expressions.
Inline math can be written using `$...$` or `\(...\)`, while block math uses `$$...$$` or `\[...\]`.

## Quick start

The `notebooklm-latex-extension` directory already includes `katex.min.js`, `katex.min.css`, and the required fonts.

1. Open Chrome and go to `chrome://extensions`.
2. Enable *Developer mode*.
3. Click **Load unpacked** and select `notebooklm-latex-extension`.
4. Navigate to NotebookLM and LaTeX expressions will render automatically.

To update the bundled KaTeX files, optionally run `npm install` inside `notebooklm-latex-extension` and copy over the new `katex.min.js`, `katex.min.css`, and `fonts/` directory.

The extension relies on the [KaTeX](https://katex.org/) runtime, which is **not included** in the repository. See [`notebooklm-latex-extension`](./notebooklm-latex-extension/) for instructions on downloading the KaTeX files and loading the extension.

## License

This project is licensed under the [MIT License](./LICENSE).

