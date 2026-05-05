import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Mic = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M18 11a6 6 0 0 1-12 0" /><rect width={6} height={11} x={9} y={3} stroke="currentColor" strokeWidth={2} rx={3} /><path fill="currentColor" d="M13 21a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0z" /></svg>));
Mic.displayName = "Mic";