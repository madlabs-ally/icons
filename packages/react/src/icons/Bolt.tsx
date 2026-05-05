import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Bolt = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M11.5 3.443a1 1 0 0 1 1 0l6.66 3.846a1 1 0 0 1 .5.865v7.692a1 1 0 0 1-.5.865l-6.66 3.846a1 1 0 0 1-1 0L4.84 16.71a1 1 0 0 1-.5-.865V8.154a1 1 0 0 1 .5-.865z" /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={2} /></svg>));
Bolt.displayName = "Bolt";