import React from 'react';
import { IconStyle, IconDefinition } from '@melospot/icons';
export { IconCategory, IconProps, IconStyle } from '@melospot/icons';
export { ArrowDownLeft } from './icons/ArrowDownLeft.js';
export { ArrowDownRight } from './icons/ArrowDownRight.js';
export { ArrowLeft } from './icons/ArrowLeft.js';
export { ArrowRightLeft } from './icons/ArrowRightLeft.js';
export { ArrowRight } from './icons/ArrowRight.js';
export { ArrowUpDown } from './icons/ArrowUpDown.js';
export { ArrowUpRight } from './icons/ArrowUpRight.js';
export { BatteryLow } from './icons/BatteryLow.js';
export { Bolt } from './icons/Bolt.js';
export { CircleArrowDown } from './icons/CircleArrowDown.js';
export { CircleDashed } from './icons/CircleDashed.js';
export { CircleMinus } from './icons/CircleMinus.js';
export { CirclePause } from './icons/CirclePause.js';
export { CircleSlash } from './icons/CircleSlash.js';
export { Circle } from './icons/Circle.js';
export { Columns } from './icons/Columns.js';
export { Dice1 } from './icons/Dice1.js';
export { Dice2 } from './icons/Dice2.js';
export { Dice4 } from './icons/Dice4.js';
export { Dice5 } from './icons/Dice5.js';
export { Dice6 } from './icons/Dice6.js';
export { EllipsisVertical } from './icons/EllipsisVertical.js';
export { Ellipsis } from './icons/Ellipsis.js';
export { Image } from './icons/Image.js';
export { List } from './icons/List.js';
export { Minus } from './icons/Minus.js';
export { Pause } from './icons/Pause.js';
export { PlusCircle } from './icons/PlusCircle.js';
export { Plus } from './icons/Plus.js';
export { SquareArrowDownLeft } from './icons/SquareArrowDownLeft.js';
export { SquareDotted } from './icons/SquareDotted.js';
export { SquarePlus } from './icons/SquarePlus.js';
export { Square } from './icons/Square.js';
export { Sun } from './icons/Sun.js';
export { Table } from './icons/Table.js';
export { XCircle } from './icons/XCircle.js';
export { X } from './icons/X.js';
import 'react/jsx-runtime';

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
