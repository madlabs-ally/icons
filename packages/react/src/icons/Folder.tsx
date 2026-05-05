import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Folder = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M13 7a1 1 0 1 0 0 2zm0 1v1h9V7h-9z" /><path fill="currentColor" d="M9.707 3.293a1 1 0 0 0-1.414 1.414L9 4zM9 4l-.707.707 4 4L13 8l.707-.707-4-4z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M22 8v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" /></svg>));
Folder.displayName = "Folder";