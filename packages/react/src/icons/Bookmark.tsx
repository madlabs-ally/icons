import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
export const Bookmark = React.memo(React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" ref={ref} {...props}><path d="M6 3H18C18.5523 3 19 3.44772 19 4V18.3916C18.9999 19.177 18.1357 19.6555 17.4697 19.2393L13.5898 16.8145C12.6171 16.2066 11.3829 16.2066 10.4102 16.8145L6.53027 19.2393C5.86425 19.6555 5.00007 19.177 5 18.3916V4C5 3.44772 5.44772 3 6 3Z" stroke="currentColor" strokeWidth={2} /></svg>));
Bookmark.displayName = "Bookmark";