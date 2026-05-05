import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Timer = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={13} r={7} stroke="currentColor" strokeWidth={2} /><path fill="currentColor" d="M14.553 9.704a1 1 0 1 1 1.407 1.421l-2.842 2.814a1 1 0 1 1-1.407-1.421z" /><rect width={2} height={10} x={17} y={2} fill="currentColor" rx={1} transform="rotate(90 17 2)" /></svg>));
Timer.displayName = "Timer";