import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Ellipsis = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect x={8} y={10} width={4} height={4} rx={2} transform="rotate(90 8 10)" fill="currentColor" /><rect x={14} y={10} width={4} height={4} rx={2} transform="rotate(90 14 10)" fill="currentColor" /><rect x={20} y={10} width={4} height={4} rx={2} transform="rotate(90 20 10)" fill="currentColor" /></svg>));
Ellipsis.displayName = "Ellipsis";