# Contribution Guide

Thank you for your interest in contributing to MeloSpot Icons 🎉 We appreciate your help in improving and expanding the collection. Please follow this guide to ensure a smooth contribution process.

---

## Getting Started

### 1. **Fork the Repository**
- Click the **Fork** button at the top right of the repository to create a copy under your GitHub account.

### 2. **Clone the Repository**
- Clone your forked repository to your local machine:
  
  ```sh
  git clone https://github.com/your-username/icons.git
  cd icons
  ```

### 3. **Install Dependencies**
- Run the following command to install project dependencies:
  
  ```sh
  npm install
  ```

### 4. **Create a New Branch**
- Create a feature branch for your changes:
  
  ```sh
  git checkout -b feature/add-new-icon
  ```

---

## Adding a New Icon

1. Navigate to `src/icons/` and create a new file, e.g., `NewIcon.tsx`.
2. Use the following template for your icon:

```tsx
import React from "react";
import { Icon, IconProps } from "../components/Icon";

export const NewIcon: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M5 12l5 5L20 7" />
  </Icon>
);
```

3. Export the icon in `src/icons/index.ts`:

```ts
export * from "./NewIcon";
```

4. Run Prettier to format your code:

```sh
npm run format
```

5. Run tests to ensure everything works:

```sh
pnpm test
```

   Or run tests in watch mode during development:

```sh
pnpm test:watch
```

---

## Submitting Your Changes

### 1. **Commit Your Changes**
- Write a clear commit message:

  ```sh
  git add .
  git commit -m "feat: added NewIcon component"
  ```

### 2. **Push Your Branch**
- Push your feature branch to your fork:

  ```sh
  git push origin feature/add-new-icon
  ```

### 3. **Open a Pull Request**
- Go to the original repository on GitHub.
- Click **Compare & pull request**.
- Provide a clear description of your changes.
- Submit the pull request!

---

## Code Style & Best Practices

- Follow the project’s **TypeScript and React conventions**.
- Use **Prettier** and **ESLint** for consistent formatting.
- Ensure icons use `currentColor` for proper theming.
- Keep the **icon size responsive** by defaulting to `24px`.
- Ensure new icons are **accessible** (e.g., using `aria-label` when needed).

---

## Need Help?
If you have any questions, feel free to open an issue or start a discussion. We appreciate every contribution and look forward to working with you! 🚀

Happy coding! 💖

