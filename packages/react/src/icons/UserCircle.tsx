import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const UserCircle = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><circle cx={12} cy={11} r={3} stroke="currentColor" strokeWidth={2} /><path d="M17 20C17 17.2386 14.7614 15 12 15C9.23858 15 7 17.2386 7 20" stroke="currentColor" strokeWidth={2} /></svg>));
UserCircle.displayName = "UserCircle";