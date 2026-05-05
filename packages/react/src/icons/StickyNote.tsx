import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const StickyNote = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M19 9v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8m.414 0L19 9" /><rect width={7} height={2} x={13} y={9} fill="currentColor" rx={0.5} /><rect width={8} height={2} x={15} y={3} fill="currentColor" rx={0.5} transform="rotate(90 15 3)" /></svg>));
StickyNote.displayName = "StickyNote";