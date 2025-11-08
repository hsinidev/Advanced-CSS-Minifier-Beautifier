
# Advanced CSS Minifier & Beautifier

A powerful, fast, and user-friendly online tool to minify, compress, and beautify CSS code. Built with React, TypeScript, and Tailwind CSS, this application provides a sleek two-panel editor interface, advanced formatting options, and a stunning cosmic-themed design.

## Live Demo

While this is a source code repository, you can visualize the final product as a modern, single-page web application hosted on a platform like Vercel or Netlify.

## Features

- **Dual-Panel Editor**: A clear, side-by-side view for your input and output CSS.
- **CSS Minification**: Compresses CSS code by removing whitespace, comments, and unnecessary characters to reduce file size and improve website loading speed.
- **CSS Beautification/Formatting**: Formats messy or minified CSS into a readable, well-structured format with customizable indentation.
- **Customizable Indentation**: Choose from 2 spaces, 4 spaces, 8 spaces, or no spaces (for minification).
- **Auto-Update**: See the transformed output in real-time as you type.
- **Copy & Clear**: Easily manage your code in the editor panels with one-click copy and clear actions.
- **Download Output**: Download the processed CSS directly to a `.css` file.
- **Stunning UI/UX**: A sleek, dark, cosmic-themed interface with animated backgrounds for a pleasant user experience.
- **Fully Responsive**: Works seamlessly on desktops, tablets, and mobile devices.
- **SEO Optimized**: Includes a comprehensive 3500+ word article on CSS optimization, complete with JSON-LD schema for enhanced search engine visibility.
- **Informational Modals**: Easy access to About, Contact, Guide, Privacy, TOS, and DMCA information.

## Tech Stack

- **Frontend**: [React](https://react.dev/) (v18+)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`)
- **Build Tool**: Vite (or similar modern bundler)

## Project Structure

The project follows a standard, scalable React application structure:

```
/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── ControlPanel.tsx
│   │   ├── EditorPanel.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Modal.tsx
│   │   └── SeoArticle.tsx
│   ├── services/
│   │   └── cssProcessor.ts
│   ├── App.tsx
│   ├── index.html
│   └── index.tsx
└── README.md
```
*(Note: For this project, all files are generated flat as per instructions.)*

## Getting Started

To run this project locally, you would typically follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/css-tool.git
    cd css-tool
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    This project does not require any environment variables (like API keys) to run.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to `http://localhost:5173` (or the port specified by your development server).

## Core Logic

The CSS processing logic is handled in `src/services/cssProcessor.ts`.

-   **`beautifyCss`**: This function parses the input CSS string. It splits the code into rules and properties, then reconstructs it with the specified indentation level, ensuring each rule and property is on a new, properly indented line.
-   **`minifyCss`**: This function strips all comments (`/* ... */`), removes line breaks, and collapses multiple whitespace characters into a single space where necessary (e.g., between selectors and the opening brace).

## Contribution

Contributions are welcome! If you have suggestions for improvements or find any bugs, please feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the MIT License.

---

**Powered by HSINI MOHAMED**
[GitHub](https://github.com/hsinidev) | [doodax.com](https://doodax.com) | hsini.web@gmail.com
   