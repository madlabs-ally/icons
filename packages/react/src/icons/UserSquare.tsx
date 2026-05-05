import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const UserSquare = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={11} r={3} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M18 20a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5" /><rect width={18} height={18} x={3} y={3} stroke="currentColor" strokeWidth={2} rx={3} /></svg>));
UserSquare.displayName = "UserSquare";