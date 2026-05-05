import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const PowerOff = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect width={2} height={8} x={13} y={11} fill="currentColor" rx={1} transform="rotate(180 13 11)" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M7.99 6.793a6 6 0 1 0 7.44-.16" /></svg>));
PowerOff.displayName = "PowerOff";