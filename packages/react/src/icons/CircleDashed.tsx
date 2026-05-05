import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const CircleDashed = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeDasharray="4 4" strokeLinejoin="bevel" strokeWidth={2} /></svg>));
CircleDashed.displayName = "CircleDashed";