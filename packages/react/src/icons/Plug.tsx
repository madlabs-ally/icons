import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Plug = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M19 7v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7z" /><path fill="currentColor" d="M10 7H8V2a1 1 0 0 1 2 0zm6 0h-2V2a1 1 0 1 1 2 0zm-3 9h-2v5a1 1 0 1 0 2 0z" /></svg>));
Plug.displayName = "Plug";