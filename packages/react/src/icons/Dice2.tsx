import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Dice2 = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path fill="currentColor" d="M9 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /><rect width={4} height={4} x={17} y={10} fill="currentColor" rx={2} transform="rotate(90 17 10)" /><rect width={18} height={18} x={3} y={3} stroke="currentColor" strokeWidth={2} rx={3} /></svg>));
Dice2.displayName = "Dice2";