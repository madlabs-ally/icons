import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Record = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g clipPath="url(#clip0_14_16)"><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><circle cx={12} cy={12} r={4} fill="currentColor" stroke="currentColor" strokeWidth={2} /></g><defs><clipPath id="clip0_14_16"><rect width={24} height={24} fill="white" /></clipPath></defs></svg>));
Record.displayName = "Record";