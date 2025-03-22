// src/IconBase.tsx
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const IconBase: React.FC<IconProps> = ({ size = 24, children, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    {children}
  </svg>
);

export default IconBase;
