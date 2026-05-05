import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Umbrella = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12" /><path fill="currentColor" d="M2 13v-2h20v2z" /><path fill="currentColor" d="M11 19h2v-8h-2z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M8.004 19a2 2 0 1 0 4 .008" /></svg>));
Umbrella.displayName = "Umbrella";