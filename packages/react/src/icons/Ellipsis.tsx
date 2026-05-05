import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Ellipsis = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect width={4} height={4} x={8} y={10} fill="currentColor" rx={2} transform="rotate(90 8 10)" /><rect width={4} height={4} x={14} y={10} fill="currentColor" rx={2} transform="rotate(90 14 10)" /><rect width={4} height={4} x={20} y={10} fill="currentColor" rx={2} transform="rotate(90 20 10)" /></svg>));
Ellipsis.displayName = "Ellipsis";