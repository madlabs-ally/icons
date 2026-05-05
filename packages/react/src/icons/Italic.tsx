import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Italic = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M10 4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2zM6 22a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" /><path stroke="currentColor" strokeWidth={2} d="m13.976 3.217-4 18" /></svg>));
Italic.displayName = "Italic";