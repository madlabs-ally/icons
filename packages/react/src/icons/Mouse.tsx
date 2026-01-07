import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Mouse = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path d="M12 5C14.7614 5 17 7.23858 17 10V14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14V10C7 7.23858 9.23858 5 12 5Z" stroke="currentColor" strokeWidth={2} /><path d="M11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V9Z" fill="currentColor" /></svg>));
Mouse.displayName = "Mouse";