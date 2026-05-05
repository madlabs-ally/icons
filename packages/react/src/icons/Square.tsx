import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Square = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect width={18} height={18} x={3} y={3} stroke="currentColor" strokeWidth={2} rx={3} /></svg>));
Square.displayName = "Square";