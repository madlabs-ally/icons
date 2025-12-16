import { Component, ComponentProps } from 'solid-js';

const CirclePause: Component<ComponentProps<'svg'>> = (props) => {
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
      <g clip-path="url(#clip0_3387_71)">
<circle cx="12" cy="12" r="9" stroke="black" stroke-width="2"/>
<path d="M9 9C9 8.44772 9.44772 8 10 8V8C10.5523 8 11 8.44772 11 9V15C11 15.5523 10.5523 16 10 16V16C9.44772 16 9 15.5523 9 15V9Z" fill="#141313"/>
<path d="M13 9C13 8.44772 13.4477 8 14 8V8C14.5523 8 15 8.44772 15 9V15C15 15.5523 14.5523 16 14 16V16C13.4477 16 13 15.5523 13 15V9Z" fill="#141313"/>
</g>
<defs>
<clipPath id="clip0_3387_71">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};
export default CirclePause;