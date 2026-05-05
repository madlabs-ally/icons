import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Triangle = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g clipPath="url(#a)"><path stroke="currentColor" strokeWidth={2} d="M6.482 16.68a1 1 0 0 1-.87-1.498l5.176-9.012a1 1 0 0 1 1.732-.004l5.216 8.989a1 1 0 0 1-.862 1.502z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>));
Triangle.displayName = "Triangle";