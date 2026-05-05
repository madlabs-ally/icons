import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Server = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect width={18} height={6} x={3} y={4} stroke="currentColor" strokeWidth={2} rx={2} /><rect width={18} height={6} x={3} y={14} stroke="currentColor" strokeWidth={2} rx={2} /><circle cx={6} cy={7} r={1} fill="currentColor" /><circle cx={6} cy={17} r={1} fill="currentColor" /></svg>));
Server.displayName = "Server";