import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const LockOpen = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect x={3} y={10} width={18} height={10} rx={2} stroke="currentColor" strokeWidth={2} /><path d="M15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /><rect width={2} height={4} transform="matrix(1 0 0 -1 8 10)" fill="currentColor" /></svg>));
LockOpen.displayName = "LockOpen";