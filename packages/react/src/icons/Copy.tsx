import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Copy = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><mask id="a" fill="#fff"><rect width={16} height={16} x={6} y={2} rx={1} /></mask><rect width={16} height={16} x={6} y={2} stroke="currentColor" strokeWidth={4} mask="url(#a)" rx={1} /><path stroke="currentColor" strokeWidth={2} d="M5 5H3.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V19" /></svg>));
Copy.displayName = "Copy";