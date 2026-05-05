import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const X = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g fill="#141313" clipPath="url(#a)"><path d="M5.071 6.343A1 1 0 1 1 6.485 4.93l12.728 12.728A1 1 0 0 1 17.8 19.07z" /><path d="M6.485 19.071a1 1 0 0 1-1.414-1.414L17.8 4.929a1 1 0 1 1 1.414 1.414z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>));
X.displayName = "X";