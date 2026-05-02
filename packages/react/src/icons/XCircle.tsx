import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const XCircle = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><rect x={7.82843} y={9.17157} width={2} height={10} rx={1} transform="rotate(-45 7.82843 9.17157)" fill="currentColor" /><rect x={9.24265} y={16.2426} width={2} height={10} rx={1} transform="rotate(-135 9.24265 16.2426)" fill="currentColor" /></svg>));
XCircle.displayName = "XCircle";