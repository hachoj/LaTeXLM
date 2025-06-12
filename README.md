# LaTeXLM

This repository provides a small Chrome extension that renders LaTeX on [NotebookLM](https://notebooklm.google.com/). Both inline math (`$...$` or `\(...\)`) and block math (`$$...$$` or `\[...\]`) are supported using the [KaTeX](https://katex.org/) runtime.

## Quick start

1. Clone this repository.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the `notebooklm-latex-extension` folder.
5. Visit NotebookLM and your LaTeX expressions will render automatically.

The KaTeX runtime (`katex.min.js`, `katex.min.css`, and the `fonts/` directory) is already bundled in the extension directory. If you would like to upgrade to a newer KaTeX release run `npm install` inside `notebooklm-latex-extension` and copy the updated files from `node_modules/katex/dist`.

## Packaging

For self-distribution you can zip the `notebooklm-latex-extension` folder and install the package using "Load unpacked" as above or by uploading the zip file to the Chrome extensions page.

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the [MIT License](./LICENSE).
