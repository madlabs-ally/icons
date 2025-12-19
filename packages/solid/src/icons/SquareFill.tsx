import { Component, ComponentProps } from 'solid-js';

const SquareFill: Component<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <mask id="path-1-inside-1_18_34" fill="white">
<rect x="2" y="2" width="20" height="20" rx="1"/>
</mask>
<rect x="2" y="2" width="20" height="20" rx="1" fill="black" stroke="black" stroke-width="4" mask="url(#path-1-inside-1_18_34)"/>
    </svg>
  );
};
export default SquareFill;