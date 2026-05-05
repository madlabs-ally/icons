import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Handbag = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M5.49 6h13.02a2 2 0 0 1 1.966 1.632l1.875 10A2 2 0 0 1 20.385 20H3.615a2 2 0 0 1-1.966-2.368l1.875-10A2 2 0 0 1 5.49 6Z" /><path stroke="currentColor" strokeWidth={2} d="M16 9V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5" /></svg>));
Handbag.displayName = "Handbag";