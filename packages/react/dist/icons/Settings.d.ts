import React from 'react';
import { IconStyle } from '@melospot/icons-core';

interface SettingsProps extends Omit<React.SVGProps<SVGSVGElement>, 'size' | 'color' | 'aria-hidden' | 'style'> {
    size?: number | string;
    strokeWidth?: number;
    color?: string;
    variant?: IconStyle;
    style?: React.CSSProperties;
    'aria-label'?: string;
    'aria-hidden'?: boolean;
}
declare const Settings: React.ForwardRefExoticComponent<Omit<SettingsProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

export { Settings, type SettingsProps };
