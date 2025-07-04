# LaTeXLM

This repository provides a small Chrome extension that renders LaTeX on [NotebookLM](https://notebooklm.google.com/). Both inline math (`$...$` or `\(...\)`) and block math (`$$...$$` or `\[...\]`) are rendered with the bundled [MathJax](https://www.mathjax.org/) runtime. Block expressions can span multiple lines separated by newlines.

## Quick start

1. Clone this repository.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the `notebooklm-latex-extension` folder.
5. Visit NotebookLM and your LaTeX expressions will render automatically.

The MathJax runtime (`mathjax.js`) is already bundled in the extension directory. If you would like to upgrade to a newer MathJax release run `npm install` inside `notebooklm-latex-extension` and copy the updated file from `node_modules/mathjax-full/es5`.

# ***IMPORTANT***


Add 
```
When making math expressions, use MathJax. In MathJax, for all uses of "_", put spaces on both ends, so you have “ _ ". For example, to say $x _ {r}$, instead say $x _ {r}$. For block math, delimiter, newline, math, newline, delimiter.
```
to your custom prompt for this to work.


## Packaging

For self-distribution you can zip the `notebooklm-latex-extension` folder and install the package using "Load unpacked" as above or by uploading the zip file to the Chrome extensions page.

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the [MIT License](./LICENSE).
