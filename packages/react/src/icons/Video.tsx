import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Video = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g stroke="currentColor" strokeWidth={2} clipPath="url(#a)"><rect width={14} height={10} x={2} y={7} rx={2} /><path d="m21.337 14.392-4.526-2.55 4.472-2.645z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>));
Video.displayName = "Video";