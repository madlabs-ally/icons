import React from 'react';
import { IconStyle } from '@melospot/icons-core';

interface UserProps extends Omit<React.SVGProps<SVGSVGElement>, 'size' | 'color' | 'aria-hidden' | 'style'> {
    size?: number | string;
    strokeWidth?: number;
    color?: string;
    variant?: IconStyle;
    style?: React.CSSProperties;
    'aria-label'?: string;
    'aria-hidden'?: boolean;
}
declare const User: React.ForwardRefExoticComponent<Omit<UserProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

export { User, type UserProps };
