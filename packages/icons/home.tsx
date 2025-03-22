// src/icons/Home.tsx
import React from "react";
import IconBase from "../../app/IconBase";

const Home: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <IconBase {...props}>
    <path
      d="M3 12L12 3l9 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);

export default Home;
