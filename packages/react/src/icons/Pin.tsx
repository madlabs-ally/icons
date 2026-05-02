import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Pin = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={6} r={3} stroke="currentColor" strokeWidth={2} /><path d="M13 21C13 21.5523 12.5523 22 12 22V22C11.4477 22 11 21.5523 11 21V9H13V21Z" fill="currentColor" /></svg>));
Pin.displayName = "Pin";