import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Rss = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M17 17c0-5.523-4.477-10-10-10" /><circle cx={8} cy={16} r={1} fill="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M13 17a6 6 0 0 0-6-6" /></svg>));
Rss.displayName = "Rss";