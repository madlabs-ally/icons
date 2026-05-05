import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const File = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M19 8.25V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m.414 0L19 7" /><rect width={7} height={2} x={13} y={7} fill="currentColor" rx={0.5} /><rect width={8} height={2} x={15} y={1} fill="currentColor" rx={0.5} transform="rotate(90 15 1)" /></svg>));
File.displayName = "File";