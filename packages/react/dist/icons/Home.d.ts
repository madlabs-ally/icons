import React from 'react';
import { IconStyle } from '@melospot/icons-core';

interface HomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'size' | 'color' | 'aria-hidden' | 'style'> {
    size?: number | string;
    strokeWidth?: number;
    color?: string;
    variant?: IconStyle;
    style?: React.CSSProperties;
    'aria-label'?: string;
    'aria-hidden'?: boolean;
}
declare const Home: React.ForwardRefExoticComponent<Omit<HomeProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

export { Home, type HomeProps };
