import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const CircleLoading = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><g clipPath="url(#clip0_21_168)"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /></g><defs><clipPath id="clip0_21_168"><rect width={24} height={24} fill="white" /></clipPath></defs></svg>));
CircleLoading.displayName = "CircleLoading";