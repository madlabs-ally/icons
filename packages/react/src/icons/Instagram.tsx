import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Instagram = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path d="M17 6C17.5523 6 18 6.44772 18 7V7C18 7.55228 17.5523 8 17 8V8C16.4477 8 16 7.55228 16 7V7C16 6.44772 16.4477 6 17 6V6Z" fill="currentColor" /><rect x={3} y={3} width={18} height={18} rx={3} stroke="currentColor" strokeWidth={2} /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={2} /></svg>));
Instagram.displayName = "Instagram";