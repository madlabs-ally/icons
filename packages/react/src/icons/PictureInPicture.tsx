import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const PictureInPicture = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1em" height="1em" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M19 10V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" /><rect width={11} height={7} x={10} y={12} stroke="currentColor" strokeWidth={2} rx={1} /></svg>));
PictureInPicture.displayName = "PictureInPicture";