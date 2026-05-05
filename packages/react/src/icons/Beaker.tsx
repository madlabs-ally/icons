import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Beaker = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M8 18V5h8v13a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.99-1.796z" /><path fill="currentColor" d="M17 4a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2zm0 9v2H7v-2z" /></svg>));
Beaker.displayName = "Beaker";