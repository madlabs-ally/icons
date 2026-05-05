import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const ZoomOut = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={10} cy={11} r={7} stroke="currentColor" strokeWidth={2} /><path fill="currentColor" d="M14.766 17.175a1 1 0 0 1 1.286-1.532l4.596 3.857a1 1 0 0 1-1.286 1.532z" /><rect width={2} height={8} x={6} y={12} fill="currentColor" rx={1} transform="rotate(-90 6 12)" /></svg>));
ZoomOut.displayName = "ZoomOut";