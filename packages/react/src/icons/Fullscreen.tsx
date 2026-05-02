import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Fullscreen = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path d="M2 7V5C2 3.34315 3.34315 2 5 2H7M2 17V19C2 20.6569 3.34315 22 5 22H7M17 22H19C20.6569 22 22 20.6569 22 19V17M22 7V5C22 3.34315 20.6569 2 19 2H17" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /><rect x={7} y={7} width={10} height={10} rx={2} stroke="currentColor" strokeWidth={2} /></svg>));
Fullscreen.displayName = "Fullscreen";