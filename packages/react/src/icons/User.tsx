import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const User = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={7} r={3} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M20 20a6 6 0 0 0-6-6h-4a6 6 0 0 0-6 6" /></svg>));
User.displayName = "User";