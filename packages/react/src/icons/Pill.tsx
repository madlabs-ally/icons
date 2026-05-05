import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Pill = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect width={14} height={6} x={5.414} y={14.314} stroke="currentColor" strokeWidth={2} rx={3} transform="rotate(-45 5.414 14.314)" /><path fill="currentColor" d="m16.02 13.606-1.414 1.415L8.95 9.364l1.415-1.414z" /></svg>));
Pill.displayName = "Pill";