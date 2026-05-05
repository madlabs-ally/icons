import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Lock = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect width={18} height={10} x={3} y={10} stroke="currentColor" strokeWidth={2} rx={2} /><path stroke="currentColor" strokeWidth={2} d="M15 6a3 3 0 1 0-6 0" /><path fill="currentColor" d="M8 10h2V6H8zm6 0h2V6h-2z" /></svg>));
Lock.displayName = "Lock";