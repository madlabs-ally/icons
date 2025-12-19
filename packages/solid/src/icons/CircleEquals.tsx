import { Component, ComponentProps } from 'solid-js';

const CircleEquals: Component<ComponentProps<'svg'>> = (props) => {
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
      <g clip-path="url(#clip0_2_143)">
<circle cx="12" cy="12" r="9" stroke="black" stroke-width="2"/>
<path d="M9 15C8.44772 15 8 14.5523 8 14C8 13.4477 8.44772 13 9 13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H9Z" fill="#141313"/>
<path d="M9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H9Z" fill="#141313"/>
</g>
<defs>
<clipPath id="clip0_2_143">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};
export default CircleEquals;