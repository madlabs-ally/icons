import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Clipboard = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M17 4h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2" /><mask id="a" fill="#fff"><rect width={10} height={6} x={7} y={1} rx={1} /></mask><rect width={10} height={6} x={7} y={1} stroke="currentColor" strokeWidth={4} mask="url(#a)" rx={1} /></svg>));
Clipboard.displayName = "Clipboard";