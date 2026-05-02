import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Video = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g clipPath="url(#clip0_121_225)"><rect x={2} y={7} width={14} height={10} rx={2} stroke="currentColor" strokeWidth={2} /><path d="M21.3374 14.3923L16.8109 11.8423L21.2828 9.19661L21.3374 14.3923Z" stroke="currentColor" strokeWidth={2} /></g><defs><clipPath id="clip0_121_225"><rect width={24} height={24} fill="white" /></clipPath></defs></svg>));
Video.displayName = "Video";