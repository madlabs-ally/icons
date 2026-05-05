import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Venus = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={8} r={5} stroke="currentColor" strokeWidth={2} /><rect width={2} height={10} fill="currentColor" rx={1} transform="matrix(1 0 0 -1 11 22)" /><rect width={2} height={10} fill="currentColor" rx={1} transform="matrix(0 1 1 0 7 16)" /></svg>));
Venus.displayName = "Venus";