# Icon Design Guide

This guide provides best practices and design principles for creating and using icons within the **MeloSpot Icons** library. Icons are a critical part of user interfaces and can significantly impact the usability and overall aesthetics of a design. 

## Table of Contents
- [Design Principles](#design-principles)
- [Icon Styles](#icon-styles)
- [Usage Guidelines](#usage-guidelines)
- [Icon Sizes](#icon-sizes)
- [Accessibility](#accessibility)
- [Coloring Icons](#coloring-icons)
- [Exporting Icons](#exporting-icons)
- [Best Practices](#best-practices)
- [Icon Component Library](#icon-component-library)

---

## Design Principles

### 1. **Simplicity**
Icons should be simple and easily recognizable. Avoid unnecessary details that make the icon harder to understand.

- **Good**: A simple, minimalistic magnifying glass for search.
- **Bad**: A complicated, overly detailed magnifying glass with textures.

### 2. **Consistency**
Maintain consistency in style, shape, and line thickness across all icons.

- **Example**: If your icons have rounded corners, ensure all icons share that same style.

### 3. **Scalability**
Design icons in a vector format (SVG) so they can be resized without losing quality. Icons should look good at both small and large sizes.

---

## Icon Styles

### 1. **Outline**
Outline icons are primarily made of strokes, with no fills. This style gives a light, airy feeling, making it ideal for more minimalistic interfaces.

- **Example**: `<Icon name="search" style="outline" />`

### 2. **Filled**
Filled icons are solid and are more prominent. They are best for actions or items that require more emphasis.

- **Example**: `<Icon name="home" style="filled" />`

### 3. **Two-Tone**
Two-tone icons use two different colors, creating a visual hierarchy that draws attention to certain parts of the icon.

- **Example**: `<Icon name="notification" style="two-tone" />`

---

## Usage Guidelines

### 1. **Positioning Icons**
Icons should be positioned near text or buttons that provide context. They should never be used as standalone elements without explanation unless they are universally recognized (e.g., home, search, settings).

### 2. **Spacing Around Icons**
Ensure there is adequate space around icons to maintain clarity. The spacing should be proportional to the icon size.

- **Recommended**: Add a padding of at least 20% of the icon’s width around the icon.

---

## Icon Sizes

Icons should be scalable to different screen sizes. Here are recommended sizes for various use cases:

| Context         | Size (in px) |
|-----------------|--------------|
| Small button    | 16x16        |
| Medium button   | 24x24        |
| Large button    | 32x32        |
| Toolbar icon    | 24x24        |
| Sidebar icon    | 32x32        |
| Floating action | 56x56        |

Icons should resize responsively depending on the user's device and screen size.

---

## Accessibility

### 1. **Provide Alt Text**
All icons should have descriptive alternative text (`aria-label`) to improve accessibility for screen readers.

- **Example**: `<Icon name="search" aria-label="Search" />`

### 2. **Color Contrast**
Ensure that icons provide sufficient contrast with the background, adhering to WCAG 2.1 standards. The contrast ratio should be at least 3:1 for icons that are used alone.

- **Tip**: Tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) can help you verify contrast ratios.

---

## Coloring Icons

### 1. **Primary Color**
The default color for icons should be the primary brand color (e.g., #F7931E). 

- **Example**: `<Icon name="search" style="filled" color="#F7931E" />`

### 2. **Secondary Colors**
Secondary icons can be in shades of gray or use a muted color palette to indicate lower importance.

### 3. **Hover and Active States**
Icons should change color when hovered or clicked to give users feedback.

- **Hover**: A slight color change or shadow effect.
- **Active**: An even more distinct color change to indicate selection.

---

## Exporting Icons

Icons should be exported in various formats to support different use cases, such as:

1. **SVG**: For vector-based use in web applications.
2. **PNG**: For raster-based use (e.g., in mobile apps).
3. **Font Icons**: For use as a font icon set in web applications.
4. **JSON**: For use in design systems or for React/Angular/Vue components.

---

## Best Practices

1. **Keep it Simple**: Avoid adding unnecessary details.
2. **Stay Consistent**: Use the same icon style and line thickness across the entire library.
3. **Ensure Readability**: Icons should always be easy to understand, even at smaller sizes.
4. **Test for Accessibility**: Always test your icons with screen readers to ensure they are accessible to all users.

---

## Icon Component Library

If you plan to integrate icons into your projects, here's a basic example of how to use a component library to render icons in **React**, **Vue**, or **Angular**.

### React Example:
```jsx
import { MeloIcon } from 'melospot-icons-react';

<MeloIcon name="search" size="24" color="#F7931E" />
