import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Play = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g clipPath="url(#a)"><path stroke="currentColor" strokeWidth={2} d="M7.988 6.813a1 1 0 0 1 1.498-.87l9.012 5.176a1 1 0 0 1 .004 1.732l-8.988 5.217a1 1 0 0 1-1.502-.863z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>));
Play.displayName = "Play";