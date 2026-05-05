import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const SkipForward = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g clipPath="url(#a)"><path fill="#141313" d="M18 5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0z" /><path stroke="currentColor" strokeWidth={2} d="M4.657 6.482a1 1 0 0 1 1.498-.87l9.012 5.176a1 1 0 0 1 .004 1.732l-8.989 5.216a1 1 0 0 1-1.502-.862z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>));
SkipForward.displayName = "SkipForward";