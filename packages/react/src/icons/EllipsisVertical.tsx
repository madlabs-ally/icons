import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const EllipsisVertical = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect x={10} y={16} width={4} height={4} rx={2} fill="currentColor" /><rect x={10} y={10} width={4} height={4} rx={2} fill="currentColor" /><rect x={10} y={4} width={4} height={4} rx={2} fill="currentColor" /></svg>));
EllipsisVertical.displayName = "EllipsisVertical";