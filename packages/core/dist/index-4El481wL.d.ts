interface IconDefinition {
    name: string;
    category: string;
    tags: string[];
    svg: string;
    variants?: {
        outline?: string;
        filled?: string;
        duotone?: string;
        micro?: string;
    };
    aliases?: string[];
    deprecated?: boolean;
    version?: string;
}
type IconStyle = 'outline' | 'filled' | 'duotone' | 'micro';
interface IconProps {
    size?: number | string;
    strokeWidth?: number;
    color?: string;
    style?: IconStyle;
    className?: string;
    'aria-label'?: string;
    'aria-hidden'?: boolean;
}
interface IconComponentProps extends IconProps {
    name: string;
}
type IconCategory = 'essential' | 'actions' | 'navigation' | 'media' | 'social' | 'ecommerce' | 'status' | 'files' | 'development' | 'miscellaneous' | 'brand';

declare class IconRegistry {
    private static icons;
    private static categories;
    private static aliases;
    static register(icon: IconDefinition): void;
    static get(name: string): IconDefinition | undefined;
    static getAll(): IconDefinition[];
    static getByCategory(category: IconCategory): IconDefinition[];
    static search(query: string): IconDefinition[];
    static getCategories(): IconCategory[];
}

declare const homeIcon: IconDefinition;

declare const settingsIcon: IconDefinition;

declare const userIcon: IconDefinition;

export { type IconDefinition as I, type IconStyle as a, type IconProps as b, type IconComponentProps as c, type IconCategory as d, IconRegistry as e, homeIcon as h, settingsIcon as s, userIcon as u };
