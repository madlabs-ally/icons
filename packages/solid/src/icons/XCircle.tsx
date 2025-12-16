import { Component, ComponentProps } from 'solid-js';

const XCircle: Component<ComponentProps<'svg'>> = (props) => {
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
      <g clip-path="url(#clip0_3372_8)">
<circle cx="12" cy="12" r="9" stroke="black" stroke-width="2"/>
<rect x="7.82843" y="9.17157" width="2" height="10" rx="1" transform="rotate(-45 7.82843 9.17157)" fill="#141313"/>
<rect x="9.24265" y="16.2426" width="2" height="10" rx="1" transform="rotate(-135 9.24265 16.2426)" fill="#141313"/>
</g>
<defs>
<clipPath id="clip0_3372_8">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};
export default XCircle;