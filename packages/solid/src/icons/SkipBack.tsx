import { Component, ComponentProps } from 'solid-js';

const SkipBack: Component<ComponentProps<'svg'>> = (props) => {
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
      <g clip-path="url(#clip0_14_99)">
<path d="M6 5C6 4.44772 5.55228 4 5 4V4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20V20C5.55228 20 6 19.5523 6 19V5Z" fill="#141313"/>
<path d="M19.3434 6.48153C19.3452 5.71173 18.5126 5.22853 17.8451 5.61192L8.83319 10.7876C8.16583 11.171 8.1638 12.1333 8.82943 12.5197L17.8179 17.7364C18.4836 18.1227 19.3181 17.6435 19.32 16.8739L19.3434 6.48153Z" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_14_99">
<rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"/>
</clipPath>
</defs>
    </svg>
  );
};
export default SkipBack;