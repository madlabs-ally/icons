import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Plus = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M11 3a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0z" /><path fill="currentColor" d="M3 13a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2z" /></svg>));
Plus.displayName = "Plus";