import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Smartphone = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g clipPath="url(#a)"><rect width={14} height={10} x={17} y={5} stroke="currentColor" strokeWidth={2} rx={2} transform="rotate(90 17 5)" /><path fill="currentColor" d="M13 15a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>));
Smartphone.displayName = "Smartphone";