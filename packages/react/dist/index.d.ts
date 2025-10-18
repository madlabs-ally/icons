import React from 'react';
import { IconStyle, IconDefinition } from '@melospot/icons-core';
export { IconCategory, IconProps, IconStyle } from '@melospot/icons-core';
export { Home } from './icons/Home.js';
export { Settings } from './icons/Settings.js';
export { User } from './icons/User.js';

interface ReactIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'size' | 'color' | 'aria-hidden' | 'style'> {
    name: string;
    size?: number | string;
    strokeWidth?: number;
    color?: string;
    variant?: IconStyle;
    style?: React.CSSProperties;
    'aria-label'?: string;
    'aria-hidden'?: boolean;
}
declare const Icon: React.ForwardRefExoticComponent<Omit<ReactIconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

declare function useIcon(name: string): IconDefinition | null;

declare function useIconSearch(query: string): IconDefinition[];

export { Icon, type ReactIconProps, useIcon, useIconSearch };
