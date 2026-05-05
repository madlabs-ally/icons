import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Diff = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M11 5a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0z" /><path fill="currentColor" d="M7 11a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2zm0 8a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z" /></svg>));
Diff.displayName = "Diff";