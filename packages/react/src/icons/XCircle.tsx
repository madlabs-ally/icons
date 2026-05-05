import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const XCircle = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><rect width={2} height={10} x={7.828} y={9.172} fill="currentColor" rx={1} transform="rotate(-45 7.828 9.172)" /><rect width={2} height={10} x={9.243} y={16.243} fill="currentColor" rx={1} transform="rotate(-135 9.243 16.243)" /></svg>));
XCircle.displayName = "XCircle";