import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const CircleCheck = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><path fill="currentColor" d="M12.667 13.95a1 1 0 0 1-1.414-1.414l2.828-2.829a1 1 0 1 1 1.414 1.414z" /><path fill="currentColor" d="M9.766 12.701a1 1 0 0 1 1.286-1.532l1.534 1.288a1 1 0 0 1-1.286 1.532z" /></svg>));
CircleCheck.displayName = "CircleCheck";