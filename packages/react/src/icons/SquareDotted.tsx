import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const SquareDotted = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect x={3} y={3} width={18} height={18} rx={1} stroke="currentColor" strokeWidth={2} strokeDasharray="4 4" /></svg>));
SquareDotted.displayName = "SquareDotted";