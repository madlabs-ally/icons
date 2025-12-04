import type { IconDefinition, IconCategory } from "./types";

export class IconRegistry {
  private static icons = new Map<string, IconDefinition>();
  private static categories = new Map<IconCategory, string[]>();
  private static aliases = new Map<string, string>();

  static register(icon: IconDefinition): void {
    this.icons.set(icon.name, icon);

    // Register category
    if (!this.categories.has(icon.category as IconCategory)) {
      this.categories.set(icon.category as IconCategory, []);
    }
    this.categories.get(icon.category as IconCategory)?.push(icon.name);

    // Register aliases
    icon.aliases?.forEach((alias) => {
      this.aliases.set(alias, icon.name);
    });
  }

  static get(name: string): IconDefinition | undefined {
    // Check if it's an alias first
    const actualName = this.aliases.get(name) || name;
    return this.icons.get(actualName);
  }

  static getAll(): IconDefinition[] {
    return Array.from(this.icons.values());
  }

  static getByCategory(category: IconCategory): IconDefinition[] {
    const iconNames = this.categories.get(category) || [];
    return iconNames.map((name) => this.icons.get(name)!).filter(Boolean);
  }

  static search(query: string): IconDefinition[] {
    const lowercaseQuery = query.toLowerCase();
    return this.getAll().filter(
      (icon) =>
        icon.name.toLowerCase().includes(lowercaseQuery) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
        icon.aliases?.some((alias) =>
          alias.toLowerCase().includes(lowercaseQuery)
        )
    );
  }

  static getCategories(): IconCategory[] {
    return Array.from(this.categories.keys());
  }
}
