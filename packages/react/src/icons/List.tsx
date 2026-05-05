import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const List = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="#141313" d="M3 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m18 0a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zm0 5a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zm0 5a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2z" /></svg>));
List.displayName = "List";