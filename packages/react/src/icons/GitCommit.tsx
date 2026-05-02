import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const GitCommit = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={2} /><path d="M4 11C3.44772 11 3 11.4477 3 12V12C3 12.5523 3.44772 13 4 13H9V11H4Z" fill="currentColor" /><path d="M15 11V13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H15Z" fill="currentColor" /></svg>));
GitCommit.displayName = "GitCommit";