# React + TypeScript + Vite
![image](https://github.com/user-attachments/assets/f2389535-d2ff-4019-941e-1c1fe601e972)

To get started with this Vite React todo application, follow these steps: [git clone https://github.com/your-username/your-repo-name.git](https://github.com/RajithaSandeera/Authentication-TodoApp.git)
Navigate to the Project Directory: cd your-repo-name
npm run dev

Features
Todo Management: Add, edit, delete, and toggle the completion status of todos.
Local Storage Integration: Todos are saved to and retrieved from local storage to persist data across page reloads.
Responsive Design: The application is designed to be mobile-friendly and responsive.
Official Plugins
This project utilizes the following official Vite plugins for React:

@vitejs/plugin-react: Uses Babel for Fast Refresh.
@vitejs/plugin-react-swc: Uses SWC for Fast Refresh.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
