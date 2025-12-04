import { forwardRef, useMemo } from 'react';
import { IconRegistry } from '@melospot/icons-core';
import { jsx } from 'react/jsx-runtime';

// src/Icon.tsx
var Icon = forwardRef(({
  name,
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  variant = "outline",
  className = "",
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
  ...props
}, ref) => {
  const icon = IconRegistry.get(name);
  if (!icon) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }
  const svgContent = icon.variants?.[variant] || icon.svg;
  const finalAriaLabel = ariaLabel || (ariaHidden ? void 0 : icon.name);
  return /* @__PURE__ */ jsx(
    "svg",
    {
      ref,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: `melospot-icon melospot-icon-${name} ${className}`,
      "aria-label": finalAriaLabel,
      "aria-hidden": ariaHidden,
      role: ariaHidden ? "presentation" : "img",
      ...props,
      dangerouslySetInnerHTML: { __html: svgContent }
    }
  );
});
Icon.displayName = "Icon";
var Home = forwardRef((props, ref) => {
  const {
    size = 24,
    strokeWidth = 2,
    color = "currentColor",
    variant = "outline",
    className = "",
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
    ...svgProps
  } = props;
  const svgContent = {
    outline: `<path d="M3 12L12 3l9 9" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M9 22V12h6v10" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    filled: `<path d="M12 3l9 9v10H3V12l9-9z" fill="currentColor"/>`,
    duotone: `<path d="M12 3l9 9v10H3V12l9-9z" fill="currentColor" opacity="0.2"/>
<path d="M3 12L12 3l9 9" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M9 22V12h6v10" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    micro: `<path d="M2 8l6-6 6 6v8H2V8z" fill="currentColor"/>`
  };
  return /* @__PURE__ */ jsx(
    "svg",
    {
      ref,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      className: `melospot-icon melospot-icon-home ${className}`,
      "aria-label": ariaLabel || "Home",
      "aria-hidden": ariaHidden,
      role: ariaHidden ? "presentation" : "img",
      ...svgProps,
      dangerouslySetInnerHTML: { __html: svgContent[variant] }
    }
  );
});
Home.displayName = "Home";
var Settings = forwardRef((props, ref) => {
  const {
    size = 24,
    strokeWidth = 2,
    color = "currentColor",
    variant = "outline",
    className = "",
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
    ...svgProps
  } = props;
  const svgContent = {
    outline: `<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="${strokeWidth}" fill="none"/>
<path d="M12 1v6m0 8v6m11-7h-6m-8 0H1m15.5-3.5L19 4.5m-14 14L7.5 16M19 19.5L16.5 17M4.5 7.5L7 5" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round"/>`,
    filled: `<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" fill="currentColor"/>`,
    duotone: `<circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2"/>
<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="${strokeWidth}" fill="none"/>
<path d="M12 1v6m0 8v6m11-7h-6m-8 0H1" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round"/>`,
    micro: `<path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1112 0A6 6 0 012 8z" fill="currentColor"/>`
  };
  return /* @__PURE__ */ jsx(
    "svg",
    {
      ref,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      className: `melospot-icon melospot-icon-settings ${className}`,
      "aria-label": ariaLabel || "Settings",
      "aria-hidden": ariaHidden,
      role: ariaHidden ? "presentation" : "img",
      ...svgProps,
      dangerouslySetInnerHTML: { __html: svgContent[variant] }
    }
  );
});
Settings.displayName = "Settings";
var User = forwardRef((props, ref) => {
  const {
    size = 24,
    strokeWidth = 2,
    color = "currentColor",
    variant = "outline",
    className = "",
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden,
    ...svgProps
  } = props;
  const svgContent = {
    outline: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="${strokeWidth}" fill="none"/>`,
    filled: `<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>`,
    duotone: `<circle cx="12" cy="7" r="4" fill="currentColor" opacity="0.2"/>
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="${strokeWidth}" fill="none"/>`,
    micro: `<path d="M8 8a3 3 0 11-6 0 3 3 0 016 0zM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 00-11.215 0c-.22.578.254 1.139.872 1.139h9.47z" fill="currentColor"/>`
  };
  return /* @__PURE__ */ jsx(
    "svg",
    {
      ref,
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      className: `melospot-icon melospot-icon-user ${className}`,
      "aria-label": ariaLabel || "User",
      "aria-hidden": ariaHidden,
      role: ariaHidden ? "presentation" : "img",
      ...svgProps,
      dangerouslySetInnerHTML: { __html: svgContent[variant] }
    }
  );
});
User.displayName = "User";
function useIcon(name) {
  return useMemo(() => {
    return IconRegistry.get(name) || null;
  }, [name]);
}
function useIconSearch(query) {
  return useMemo(() => {
    if (!query.trim()) return [];
    return IconRegistry.search(query);
  }, [query]);
}

export { Home, Icon, Settings, User, useIcon, useIconSearch };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map