import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Instagram = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M17 6a1 1 0 1 1 0 2 1 1 0 1 1 0-2" /><rect width={18} height={18} x={3} y={3} stroke="currentColor" strokeWidth={2} rx={3} /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={2} /></svg>));
Instagram.displayName = "Instagram";