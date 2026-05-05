import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Lamp = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M8.883 3h6.234a3 3 0 0 1 2.846 2.052l1.333 4A3 3 0 0 1 16.45 13h-8.9a3 3 0 0 1-2.846-3.948l1.333-4A3 3 0 0 1 8.883 3Z" /><path fill="currentColor" d="M11 13h2v8h-2z" /><rect width={2} height={12} x={18} y={20} fill="currentColor" rx={1} transform="rotate(90 18 20)" /></svg>));
Lamp.displayName = "Lamp";