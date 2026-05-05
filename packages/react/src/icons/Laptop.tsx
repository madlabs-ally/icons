import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Laptop = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M6 5h12a1 1 0 0 1 1 1v9H5V6a1 1 0 0 1 1-1Zm13.037 10 1.515 4H3.448l1.515-4z" /></svg>));
Laptop.displayName = "Laptop";