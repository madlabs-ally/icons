import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Pause = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect x={6} y={6} width={4} height={12} rx={1} stroke="currentColor" strokeWidth={2} /><rect x={14} y={6} width={4} height={12} rx={1} stroke="currentColor" strokeWidth={2} /></svg>));
Pause.displayName = "Pause";