import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const ToggleRight = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect width={16} height={10} x={4} y={7} stroke="currentColor" strokeWidth={2} rx={5} /><circle cx={15} cy={12} r={2} fill="currentColor" stroke="currentColor" strokeWidth={2} /></svg>));
ToggleRight.displayName = "ToggleRight";