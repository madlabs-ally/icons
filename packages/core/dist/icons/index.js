// src/icon-registry.ts
var IconRegistry = class {
  static register(icon) {
    this.icons.set(icon.name, icon);
    if (!this.categories.has(icon.category)) {
      this.categories.set(icon.category, []);
    }
    this.categories.get(icon.category)?.push(icon.name);
    icon.aliases?.forEach((alias) => {
      this.aliases.set(alias, icon.name);
    });
  }
  static get(name) {
    const actualName = this.aliases.get(name) || name;
    return this.icons.get(actualName);
  }
  static getAll() {
    return Array.from(this.icons.values());
  }
  static getByCategory(category) {
    const iconNames = this.categories.get(category) || [];
    return iconNames.map((name) => this.icons.get(name)).filter(Boolean);
  }
  static search(query) {
    const lowercaseQuery = query.toLowerCase();
    return this.getAll().filter(
      (icon) => icon.name.toLowerCase().includes(lowercaseQuery) || icon.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) || icon.aliases?.some((alias) => alias.toLowerCase().includes(lowercaseQuery))
    );
  }
  static getCategories() {
    return Array.from(this.categories.keys());
  }
};
IconRegistry.icons = /* @__PURE__ */ new Map();
IconRegistry.categories = /* @__PURE__ */ new Map();
IconRegistry.aliases = /* @__PURE__ */ new Map();

// src/icons/home.ts
var homeIcon = {
  name: "home",
  category: "essential",
  tags: ["house", "main", "dashboard", "start"],
  svg: `<path d="M3 12L12 3l9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  variants: {
    outline: `<path d="M3 12L12 3l9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    filled: `<path d="M12 3l9 9v10H3V12l9-9z" fill="currentColor"/>`,
    duotone: `<path d="M12 3l9 9v10H3V12l9-9z" fill="currentColor" opacity="0.2"/>
<path d="M3 12L12 3l9 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    micro: `<path d="M2 8l6-6 6 6v8H2V8z" fill="currentColor"/>`
  },
  aliases: ["house", "main"]
};

// src/icons/settings.ts
var settingsIcon = {
  name: "settings",
  category: "essential",
  tags: ["gear", "cog", "preferences", "config", "options"],
  svg: `<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
<path d="M12 1v6m0 8v6m11-7h-6m-8 0H1m15.5-3.5L19 4.5m-14 14L7.5 16M19 19.5L16.5 17M4.5 7.5L7 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  variants: {
    outline: `<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
<path d="M12 1v6m0 8v6m11-7h-6m-8 0H1m15.5-3.5L19 4.5m-14 14L7.5 16M19 19.5L16.5 17M4.5 7.5L7 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    filled: `<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" fill="currentColor"/>`,
    duotone: `<circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.2"/>
<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
<path d="M12 1v6m0 8v6m11-7h-6m-8 0H1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    micro: `<path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1112 0A6 6 0 012 8z" fill="currentColor"/>`
  },
  aliases: ["gear", "cog", "preferences", "config"]
};

// src/icons/user.ts
var userIcon = {
  name: "user",
  category: "essential",
  tags: ["person", "profile", "account", "avatar"],
  svg: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>`,
  variants: {
    outline: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>`,
    filled: `<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>`,
    duotone: `<circle cx="12" cy="7" r="4" fill="currentColor" opacity="0.2"/>
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"/>`,
    micro: `<path d="M8 8a3 3 0 11-6 0 3 3 0 016 0zM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 00-11.215 0c-.22.578.254 1.139.872 1.139h9.47z" fill="currentColor"/>`
  },
  aliases: ["person", "profile", "account"]
};

// src/icons/index.ts
IconRegistry.register(homeIcon);
IconRegistry.register(settingsIcon);
IconRegistry.register(userIcon);

export { IconRegistry, homeIcon, settingsIcon, userIcon };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map