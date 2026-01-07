import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Minimize = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path d="M2 9H5C6.65685 9 8 7.65685 8 6V3M2 15H5C6.65685 15 8 16.3431 8 18V21M16 21V18C16 16.3431 17.3431 15 19 15H22M22 9H19C17.3431 9 16 7.65685 16 6V3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /></svg>));
Minimize.displayName = "Minimize";