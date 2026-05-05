import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const CircleEquals = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><path fill="currentColor" d="M9 15a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zm0-4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2z" /></svg>));
CircleEquals.displayName = "CircleEquals";