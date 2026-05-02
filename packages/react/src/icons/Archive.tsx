import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Archive = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect x={3} y={4} width={18} height={5} rx={1} stroke="currentColor" strokeWidth={2} /><path d="M5 8V17C5 18.6569 6.34315 20 8 20H16C17.6569 20 19 18.6569 19 17V8" stroke="currentColor" strokeWidth={2} /><line x1={11} y1={13} x2={13} y2={13} stroke="currentColor" strokeWidth={2} strokeLinecap="round" /></svg>));
Archive.displayName = "Archive";