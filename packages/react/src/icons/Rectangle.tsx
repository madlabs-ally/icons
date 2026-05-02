import * as React from "react";
import type { SVGProps } from "react";
<<<<<<< HEAD
export const Rectangle = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><mask id="path-1-inside-1_3404_63" fill="white"><rect x={2} y={6} width={20} height={12} rx={1} /></mask><rect x={2} y={6} width={20} height={12} rx={1} stroke="black" strokeWidth={4} mask="url(#path-1-inside-1_3404_63)" /></svg>;
=======
import { Ref, forwardRef } from "react";
export const Rectangle = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><rect x={3} y={5} width={18} height={14} rx={3} stroke="currentColor" strokeWidth={2} /></svg>));
Rectangle.displayName = "Rectangle";
>>>>>>> fc8782269086e42ba9ffab4e5b3e5a0cc7b68e10
