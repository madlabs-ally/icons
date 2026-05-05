import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const ArrowLeft = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M19 11.05a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z" /><path fill="currentColor" d="M6.879 8.757a1 1 0 1 1 1.414 1.415l-2.475 2.474a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707z" /><path fill="currentColor" d="M4.404 12.818a.5.5 0 0 1 0-.707l.707-.707a.5.5 0 0 1 .707 0l2.475 2.475a1 1 0 1 1-1.414 1.414z" /></svg>));
ArrowLeft.displayName = "ArrowLeft";