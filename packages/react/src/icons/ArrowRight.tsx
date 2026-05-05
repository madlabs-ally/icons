import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const ArrowRight = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M5 13a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z" /><path fill="currentColor" d="M17.121 15.293a1 1 0 0 1-1.414-1.414l2.475-2.475a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .707z" /><path fill="currentColor" d="M19.596 11.232a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0l-2.475-2.474a1 1 0 0 1 1.414-1.415z" /></svg>));
ArrowRight.displayName = "ArrowRight";