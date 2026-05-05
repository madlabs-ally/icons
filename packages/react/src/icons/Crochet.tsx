import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Crochet = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={18} r={3} stroke="currentColor" strokeWidth={2} transform="rotate(180 12 18)" /><path fill="currentColor" d="M14 3a1 1 0 1 1 2 0v15h-2z" /></svg>));
Crochet.displayName = "Crochet";