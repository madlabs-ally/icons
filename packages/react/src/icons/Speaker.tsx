import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Speaker = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M5 19V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" /><path fill="currentColor" d="M13 7a1 1 0 1 1-2 0 1 1 0 1 1 2 0m0 7a1 1 0 1 1-2 0 1 1 0 1 1 2 0" /><circle cx={12} cy={14} r={3} stroke="currentColor" strokeWidth={2} /></svg>));
Speaker.displayName = "Speaker";