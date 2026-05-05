import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Pause = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect width={4} height={12} x={6} y={6} stroke="currentColor" strokeWidth={2} rx={1} /><rect width={4} height={12} x={14} y={6} stroke="currentColor" strokeWidth={2} rx={1} /></svg>));
Pause.displayName = "Pause";