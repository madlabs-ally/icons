import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Minimize = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M2 9h3a3 3 0 0 0 3-3V3M2 15h3a3 3 0 0 1 3 3v3m8 0v-3a3 3 0 0 1 3-3h3m0-6h-3a3 3 0 0 1-3-3V3" /></svg>));
Minimize.displayName = "Minimize";