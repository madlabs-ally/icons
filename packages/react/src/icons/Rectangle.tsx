import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Rectangle = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><mask id="a" fill="#fff"><rect width={20} height={12} x={2} y={6} rx={1} /></mask><rect width={20} height={12} x={2} y={6} stroke="currentColor" strokeWidth={4} mask="url(#a)" rx={1} /></svg>));
Rectangle.displayName = "Rectangle";