import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const CirclePlay = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeWidth={2} d="M8.927 8.478a1 1 0 0 1 1.498-.87l6.008 3.45a1 1 0 0 1 .004 1.733l-5.992 3.477a1 1 0 0 1-1.502-.862z" /></svg>));
CirclePlay.displayName = "CirclePlay";