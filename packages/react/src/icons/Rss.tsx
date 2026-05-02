import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Rss = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path d="M17 17C17 11.4772 12.5228 7 7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /><circle cx={8} cy={16} r={1} fill="currentColor" /><path d="M13 17C13 13.6863 10.3137 11 7 11" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /></svg>));
Rss.displayName = "Rss";