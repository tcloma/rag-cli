# RAG-CLI


## Overview

**RAG-CLI** is a command-line tool that enables you to interactively ask questions about any text or markdown file directly from your terminal. It leverages Retrieval-Augmented Generation (RAG) techniques to provide accurate, context-aware answers using state-of-the-art language models.

## Features

- **Ask questions about your files:** Query any `.txt` or `.md` file and get instant answers.
- **Interactive CLI:** Built with Commander and Inquirer for a smooth, user-friendly terminal experience.
- **Powered by Google Gen AI:** Utilizes the Gemini API for advanced language understanding and generation.
- **Fast and modern:** Runs on Bun for lightning-fast performance.

## Tech Stack

- [Commander](https://www.npmjs.com/package/commander) – CLI development
- [Inquirer](https://www.npmjs.com/package/inquirer) – Interactive CLI prompts
- [Bun](https://bun.sh/) – JavaScript runtime
- [Google Gen AI (Gemini API)](https://mlh.link/gemini-quickstart) – Large Language Model

## Getting Started

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/rag-cli.git
    cd rag-cli
    ```

2. **Install dependencies:**
    ```sh
    bun install
    ```

3. **Set up your Google Gen AI credentials:**  
    Follow the [Gemini API quickstart](https://mlh.link/gemini-quickstart) to obtain your API key and set it as an environment variable:
    ```sh
    export GEMINI_API_KEY=your_api_key_here
    ```

4. **Run the CLI:**
    ```sh
    bun run rag-cli --file path/to/your/file.md
    ```

## Usage

Once running, you'll be prompted to enter your question. The CLI will process your file and return an answer using the Gemini API.

## Example

```sh
bun run rag-cli --file README.md
? What would you like to ask about this file?
> What is the purpose of this project?
```

## Hackathon Submission

- **Demo Video:** [Link to your demo video]
- **Devpost:** [Link to your Devpost submission]
- **Public Repository:** This repo is public and will remain so post-event.

## License

MIT

---

*Built for MLH Hackfest. Push the boundaries of AI with RAG-CLI!*