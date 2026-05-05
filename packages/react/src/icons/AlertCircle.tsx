import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const AlertCircle = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><path fill="#141313" d="M13 13a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0zm0 3a1 1 0 1 1-2 0 1 1 0 1 1 2 0" /></svg>));
AlertCircle.displayName = "AlertCircle";