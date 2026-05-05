import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Mouse = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M12 5a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0v-4a5 5 0 0 1 5-5Z" /><path fill="currentColor" d="M11 9a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0z" /></svg>));
Mouse.displayName = "Mouse";