import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Disc = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={2} /></svg>));
Disc.displayName = "Disc";