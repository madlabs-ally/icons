# MeloSpot Icons

**Beautiful & consistent icon toolkit made for MeloSpot.**

A modern, TypeScript-first icon library with multiple variants, perfect tree-shaking, and built-in accessibility. Like Lucide, but more modern.

---

## 📦 Packages

MeloSpot Icons provides official packages for various frameworks and platforms to make integration easy.

| Logo           | Package                    | Version                                                                 | Downloads                                                                    | Links                                                                 |
|----------------|----------------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------|
| 🎯 Core        | `@melospot/icons`          | ![npm](https://img.shields.io/npm/v/@melospot/icons?label=version)      | ![downloads](https://img.shields.io/npm/dm/@melospot/icons?label=downloads)  | [Docs](https://icons.melospot.org) · [Source](https://github.com/MeloSpot/icons/tree/main/packages/core) |
| ⚛️ React       | `@melospot/icons-react`    | ![npm](https://img.shields.io/npm/v/@melospot/icons-react?label=version) | ![downloads](https://img.shields.io/npm/dm/@melospot/icons-react?label=downloads) | [Docs](https://icons.melospot.org) · [Source](https://github.com/MeloSpot/icons/tree/main/packages/react) |
| 🔷 Vue         | `@melospot/icons-vue`      | ![npm](https://img.shields.io/npm/v/@melospot/icons-vue?label=version)   | ![downloads](https://img.shields.io/npm/dm/@melospot/icons-vue?label=downloads)   | [Docs](https://icons.melospot.org) · [Source](https://github.com/MeloSpot/icons/tree/main/packages/vue)   |
| 🅰️ Angular     | `@melospot/icons-angular`  | ![npm](https://img.shields.io/npm/v/@melospot/icons-angular?label=version) | ![downloads](https://img.shields.io/npm/dm/@melospot/icons-angular?label=downloads) | [Docs](https://icons.melospot.org) · [Source](https://github.com/MeloSpot/icons/tree/main/packages/angular) |
| 🔴 Svelte      | `@melospot/icons-svelte`   | ![npm](https://img.shields.io/npm/v/@melospot/icons-svelte?label=version) | ![downloads](https://img.shields.io/npm/dm/@melospot/icons-svelte?label=downloads) | [Docs](https://icons.melospot.org) · [Source](https://github.com/MeloSpot/icons/tree/main/packages/svelte)  |
| 🟡 Solid       | `@melospot/icons-solid`    | ![npm](https://img.shields.io/npm/v/@melospot/icons-solid?label=version)  | ![downloads](https://img.shields.io/npm/dm/@melospot/icons-solid?label=downloads)  | [Docs](https://icons.melospot.org) · [Source](https://github.com/MeloSpot/icons/tree/main/packages/solid)   |
| 🟣 Preact      | `@melospot/icons-preact`   | ![npm](https://img.shields.io/npm/v/@melospot/icons-preact?label=version) | ![downloads](https://img.shields.io/npm/dm/@melospot/icons-preact?label=downloads) | [Docs](https://icons.melospot.org) · [Source](https://github.com/MeloSpot/icons/tree/main/packages/preact)  |
| 📱 React Native| `@melospot/icons-react-native` | ![npm](https://img.shields.io/npm/v/@melospot/icons-react-native?label=version) | ![downloads](https://img.shields.io/npm/dm/@melospot/icons-react-native?label=downloads) | [Docs](https://icons.melospot.org) · [Source](https://github.com/MeloSpot/icons/tree/main/packages/react-native) |
| 🖼️ SVG         | `@melospot/icons-svg`      | ![npm](https://img.shields.io/npm/v/@melospot/icons-svg?label=version)   | ![downloads](https://img.shields.io/npm/dm/@melospot/icons-svg?label=downloads)   | [Docs](https://icons.melospot.org) · [Source](https://github.com/MeloSpot/icons/tree/main/packages/svg)     |
| 🪐 Astro       | `@melospot/icons-astro`    | ![npm](https://img.shields.io/npm/v/@melospot/icons-astro?label=version)  | ![downloads](https://img.shields.io/npm/dm/@melospot/icons-astro?label=downloads)  | [Docs](https://icons.melospot.org) · [Source](https://github.com/MeloSpot/icons/tree/main/packages/astro)   |
---

## 🎨 Figma

MeloSpot Icons also offers a Figma plugin to make it easy for designers to access and use icons.

[**Visit the Figma Community Page**](https://www.figma.com/design/oFT9D8NNQLqIWu9G0pSYfd/MeloSpot-Icons?m=auto&t=xvRJ4E9hbLQPwaDt-6) to install the plugin.

---

## 🤝 Contributing

We welcome contributions! Please check out our [Contribution Guide](./CONTRIBUTING.md) for more details on how to add new icons or improve the library.

For maintainers looking to release new versions, please see our [Publishing Guide](./docs/PUBLISHING.md).

Spotted a mistake or want to improve the documentation? [Edit this page on GitHub](#).

---

## 🌍 Community

Join the MeloSpot community to discuss features, get help, and share feedback!

- [Join our Discord](https://discord.gg/cksKVD4x)

---

## 📜 License

MeloSpot Icons is free for both personal and commercial use and is licensed under the ISC License.

---

## 💖 Credits

A huge thank you to all our contributors for making MeloSpot Icons possible!

[![Contributors](https://contrib.rocks/image?repo=MeloSpot/icons)](https://github.com/MeloSpot/icons/graphs/contributors)

Want to contribute? [Check out our Contribution Guide](./CONTRIBUTING.md).


---

## ✨ Modern Features

### 🎨 **Multiple Icon Variants**
```tsx
import { Home } from '@melospot/icons-react'

<Home style="outline" />   {/* Clean strokes */}
<Home style="filled" />    {/* Solid shapes */}
<Home style="duotone" />   {/* Two-tone depth */}
<Home style="micro" />     {/* 12px optimized */}
```

### 🌳 **Perfect Tree-Shaking**
```tsx
// Only imports what you need
import { Home, Settings } from '@melospot/icons-react'

// Or use dynamic imports
import { Icon } from '@melospot/icons-react'
<Icon name="home" style="filled" />
```

### 🔍 **Built-in Search & Discovery**
```tsx
import { useIconSearch } from '@melospot/icons-react'

const searchResults = useIconSearch('home')
const essentialIcons = useIconsByCategory('essential')
```

### ♿ **Accessibility First**
- WCAG 2.1 compliant
- Automatic `aria-label` generation
- Screen reader friendly
- Keyboard navigation support

### 🎯 **TypeScript Native**
- Full type safety
- Icon name autocomplete
- Prop validation
- Zero runtime overhead

[**See all modern features →**](./docs/MODERN_FEATURES.md)

---

## 🚀 Quick Start

### React
```bash
npm install @melospot/icons-react
```

```tsx
import { Home, Settings, User } from '@melospot/icons-react'

function App() {
  return (
    <div>
      <Home size={24} strokeWidth={2} />
      <Settings style="filled" color="#F7931E" />
      <User className="hover:scale-110" />
    </div>
  )
}
```

### Vue (Coming Soon)
```bash
npm install @melospot/icons-vue
```

### Angular (Coming Soon)
```bash
npm install @melospot/icons-angular
```