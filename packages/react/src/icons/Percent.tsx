import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Percent = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={6} cy={6} r={3} stroke="currentColor" strokeWidth={2} /><circle cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={2} /><rect width={2} height={23} x={4.414} y={20.678} fill="currentColor" rx={1} transform="rotate(-135 4.414 20.678)" /></svg>));
Percent.displayName = "Percent";