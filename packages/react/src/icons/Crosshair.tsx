import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Crosshair = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={7} stroke="currentColor" strokeWidth={2} /><circle cx={12} cy={12} r={1} stroke="currentColor" strokeWidth={2} /><path fill="currentColor" d="M13 7a1 1 0 1 1-2 0V3a1 1 0 1 1 2 0zm0 14a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0zm4-8a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zM3 13a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z" /></svg>));
Crosshair.displayName = "Crosshair";