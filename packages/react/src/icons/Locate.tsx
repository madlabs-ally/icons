import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Locate = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={7} stroke="currentColor" strokeWidth={2} /><path fill="currentColor" d="M11 2a1 1 0 1 1 2 0v4h-2zm2 20a1 1 0 1 1-2 0v-4h2zM2 13a1 1 0 1 1 0-2h4v2zm20 0a1 1 0 1 0 0-2h-4v2z" /></svg>));
Locate.displayName = "Locate";