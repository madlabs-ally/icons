import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const UserPlus = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={10} cy={7} r={3} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M18 20a6 6 0 0 0-6-6H8a6 6 0 0 0-6 6" /><path fill="currentColor" d="M17 7a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0z" /><path fill="currentColor" d="M16 10a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z" /></svg>));
UserPlus.displayName = "UserPlus";