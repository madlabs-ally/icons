# @melospot/icons-react

Official React components for MeloSpot Icons.

## Installation

```bash
pnpm add @melospot/icons-react
# or
npm install @melospot/icons-react
# or
yarn add @melospot/icons-react
```

## Usage

Import icons directly from the package:

```tsx
import { ArrowLeft, Bolt, Sun } from '@melospot/icons-react';

function App() {
  return (
    <div>
      <ArrowLeft />
      <Bolt color="red" size={32} />
      <Sun strokeWidth={3} />
    </div>
  );
}
```

## Props

All icons accept standard SVG props plus:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number` \| `string` | `24` | Width and height of the icon |
| `color` | `string` | `"currentColor"` | Stroke color of the icon |
| `strokeWidth` | `number` \| `string` | `2` | Thickness of the stroke |
