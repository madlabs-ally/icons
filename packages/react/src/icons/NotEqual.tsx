import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const NotEqual = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M3 11a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zm0 4a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2z" /><path fill="currentColor" d="M18.435 7.121a1 1 0 1 0-1.414-1.414L5.707 17.021a1 1 0 1 0 1.414 1.414z" /></svg>));
NotEqual.displayName = "NotEqual";