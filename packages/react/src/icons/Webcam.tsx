import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Webcam = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={10} r={3} stroke="currentColor" strokeWidth={2} /><rect width={14} height={14} x={5} y={3} stroke="currentColor" strokeWidth={2} rx={3} /><path fill="currentColor" d="M11 22H9v-6h2zm4 0h-2v-6h2z" /><rect width={2} height={10} x={7} y={22} fill="currentColor" rx={1} transform="rotate(-90 7 22)" /></svg>));
Webcam.displayName = "Webcam";