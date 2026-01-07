import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Percent = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={6} cy={6} r={3} stroke="currentColor" strokeWidth={2} /><circle cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={2} /><rect x={4.41418} y={20.6777} width={2} height={23} rx={1} transform="rotate(-135 4.41418 20.6777)" fill="currentColor" /></svg>));
Percent.displayName = "Percent";