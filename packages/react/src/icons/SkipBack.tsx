import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const SkipBack = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g clipPath="url(#a)"><path fill="#141313" d="M6 5a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0z" /><path stroke="currentColor" strokeWidth={2} d="M19.343 6.482a1 1 0 0 0-1.498-.87l-9.012 5.176a1 1 0 0 0-.004 1.732l8.989 5.216a1 1 0 0 0 1.502-.862z" /></g><defs><clipPath id="a"><path fill="#fff" d="M24 0H0v24h24z" /></clipPath></defs></svg>));
SkipBack.displayName = "SkipBack";