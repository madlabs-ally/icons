import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Code = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path d="M10.4853 4.00001L2.70711 11.7782C2.31658 12.1687 2.31658 12.8019 2.70711 13.1924L10.4853 20.9706" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /><path d="M13.4853 4.00001L21.2635 11.7782C21.654 12.1687 21.654 12.8019 21.2635 13.1924L13.4853 20.9706" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /></svg>));
Code.displayName = "Code";