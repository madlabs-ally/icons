import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const SquarePlus = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="#141313" d="M11 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0z" /><path fill="#141313" d="M7 13a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z" /><rect width={18} height={18} x={3} y={3} stroke="currentColor" strokeWidth={2} rx={3} /></svg>));
SquarePlus.displayName = "SquarePlus";