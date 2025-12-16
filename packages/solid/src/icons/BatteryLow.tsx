import { Component, ComponentProps } from 'solid-js';

const BatteryLow: Component<ComponentProps<'svg'>> = (props) => {
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
      <g clip-path="url(#clip0_3344_72)">
<path d="M3 17C2.44772 17 2 16.5523 2 16C2 15.4477 2.44772 15 3 15L18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17L3 17Z" fill="#141313"/>
<path d="M2 8C2 7.44772 2.44772 7 3 7C3.55228 7 4 7.44772 4 8V16C4 16.5523 3.55228 17 3 17C2.44772 17 2 16.5523 2 16L2 8Z" fill="#141313"/>
<path d="M17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8V16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16V8Z" fill="#141313"/>
<path d="M20 10C20 9.44772 20.4477 9 21 9C21.5523 9 22 9.44772 22 10V14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14V10Z" fill="#141313"/>
<path d="M3 9C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7L18 7C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9L3 9Z" fill="#141313"/>
</g>
<defs>
<clipPath id="clip0_3344_72">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};
export default BatteryLow;