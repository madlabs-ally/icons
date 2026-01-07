import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const User = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={7} r={3} stroke="currentColor" strokeWidth={2} /><path d="M20 20C20 16.6863 17.3137 14 14 14H10C6.68629 14 4 16.6863 4 20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /></svg>));
User.displayName = "User";