import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const ArrowDown = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M11.05 5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0z" /><path fill="currentColor" d="M8.757 17.121a1 1 0 1 1 1.415-1.414l2.474 2.475a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0z" /><path fill="currentColor" d="M12.818 19.596a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l2.475-2.475a1 1 0 0 1 1.414 1.414z" /></svg>));
ArrowDown.displayName = "ArrowDown";