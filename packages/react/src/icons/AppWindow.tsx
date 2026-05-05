import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const AppWindow = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect width={18} height={14} x={3} y={5} stroke="currentColor" strokeWidth={2} rx={2} /><path fill="currentColor" d="M7 8a1 1 0 0 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 0 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 1 1 2 0" /></svg>));
AppWindow.displayName = "AppWindow";