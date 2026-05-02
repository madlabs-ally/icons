import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const PictureInPicture = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path d="M19 10V7C19 5.89543 18.1046 5 17 5H5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H8" stroke="currentColor" strokeWidth={2} /><rect x={10} y={12} width={11} height={7} rx={1} stroke="currentColor" strokeWidth={2} /></svg>));
PictureInPicture.displayName = "PictureInPicture";