import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Rainbow = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M22 17c0-5.523-4.477-10-10-10S2 11.477 2 17" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M14 17a2 2 0 1 0-4 0" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M18 17a6 6 0 0 0-12 0" /></svg>));
Rainbow.displayName = "Rainbow";