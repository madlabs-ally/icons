import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Fullscreen = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M2 7V5a3 3 0 0 1 3-3h2M2 17v2a3 3 0 0 0 3 3h2m10 0h2a3 3 0 0 0 3-3v-2m0-10V5a3 3 0 0 0-3-3h-2" /><rect width={10} height={10} x={7} y={7} stroke="currentColor" strokeWidth={2} rx={2} /></svg>));
Fullscreen.displayName = "Fullscreen";