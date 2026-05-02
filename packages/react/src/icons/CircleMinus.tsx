import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const CircleMinus = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><path d="M9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9Z" fill="currentColor" /></svg>));
CircleMinus.displayName = "CircleMinus";