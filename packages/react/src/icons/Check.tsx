import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Check = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M11.535 15.778a1 1 0 0 1-1.414-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414z" /><path fill="currentColor" d="M7.766 13.8a1 1 0 1 1 1.286-1.531l2.403 2.016a1 1 0 1 1-1.286 1.532z" /></svg>));
Check.displayName = "Check";