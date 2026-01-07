import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Pill = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect x={5.41421} y={14.3137} width={14} height={6} rx={3} transform="rotate(-45 5.41421 14.3137)" stroke="currentColor" strokeWidth={2} /><rect x={16.0208} y={13.6066} width={2} height={8} transform="rotate(135 16.0208 13.6066)" fill="currentColor" /></svg>));
Pill.displayName = "Pill";