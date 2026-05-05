import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Code = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m10.485 4-7.778 7.778a1 1 0 0 0 0 1.414l7.778 7.779m3-16.971 7.779 7.778a1 1 0 0 1 0 1.414l-7.779 7.779" /></svg>));
Code.displayName = "Code";