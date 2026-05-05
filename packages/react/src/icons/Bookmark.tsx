import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Bookmark = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M6 3h12a1 1 0 0 1 1 1v14.392a1 1 0 0 1-1.53.847l-3.88-2.425a3 3 0 0 0-3.18 0L6.53 19.24A1 1 0 0 1 5 18.392V4a1 1 0 0 1 1-1Z" /></svg>));
Bookmark.displayName = "Bookmark";