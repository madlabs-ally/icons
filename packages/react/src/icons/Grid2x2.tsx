import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Grid2x2 = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect x={3} y={3} width={18} height={18} rx={3} stroke="currentColor" strokeWidth={2} /><rect x={2} y={13} width={2} height={20} transform="rotate(-90 2 13)" fill="currentColor" /><rect width={2} height={20} transform="matrix(1 0 0 -1 11 22)" fill="currentColor" /></svg>));
Grid2x2.displayName = "Grid2x2";