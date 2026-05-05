import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Link = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M15 17h2a5 5 0 0 0 0-10h-2M9 17H7A5 5 0 0 1 7 7h2" /><path fill="currentColor" d="M16 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" /></svg>));
Link.displayName = "Link";