import { Component, ComponentProps } from 'solid-js';

const ToggleLeft: Component<ComponentProps<'svg'>> = (props) => {
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
      <rect x="4" y="7" width="16" height="10" rx="5" stroke="black" stroke-width="2"/>
<circle cx="9" cy="12" r="2" fill="black" stroke="black" stroke-width="2"/>
    </svg>
  );
};
export default ToggleLeft;