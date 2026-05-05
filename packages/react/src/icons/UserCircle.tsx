import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const UserCircle = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><circle cx={12} cy={11} r={3} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeWidth={2} d="M17 20a5 5 0 0 0-10 0" /></svg>));
UserCircle.displayName = "UserCircle";