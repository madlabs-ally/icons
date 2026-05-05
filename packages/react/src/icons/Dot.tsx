import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Dot = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g clipPath="url(#a)"><circle cx={12} cy={12} r={4} fill="currentColor" stroke="currentColor" strokeWidth={2} /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>));
Dot.displayName = "Dot";