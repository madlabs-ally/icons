import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const UserSquare = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={11} r={3} stroke="currentColor" strokeWidth={2} /><path d="M18 20C18 17.2386 15.7614 15 13 15H11C8.23858 15 6 17.2386 6 20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /><rect x={3} y={3} width={18} height={18} rx={3} stroke="currentColor" strokeWidth={2} /></svg>));
UserSquare.displayName = "UserSquare";