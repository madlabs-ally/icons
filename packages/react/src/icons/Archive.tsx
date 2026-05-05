import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Archive = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect width={18} height={5} x={3} y={4} stroke="currentColor" strokeWidth={2} rx={1} /><path stroke="currentColor" strokeWidth={2} d="M5 8v9a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M11 13h2" /></svg>));
Archive.displayName = "Archive";