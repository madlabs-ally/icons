import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const ToggleLeft = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect x={4} y={7} width={16} height={10} rx={5} stroke="currentColor" strokeWidth={2} /><circle cx={9} cy={12} r={2} fill="currentColor" stroke="currentColor" strokeWidth={2} /></svg>));
ToggleLeft.displayName = "ToggleLeft";