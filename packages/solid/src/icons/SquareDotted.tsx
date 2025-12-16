import { Component, ComponentProps } from 'solid-js';

const SquareDotted: Component<ComponentProps<'svg'>> = (props) => {
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
      <rect x="3" y="3" width="18" height="18" rx="1" stroke="black" stroke-width="2" stroke-dasharray="4 4"/>
    </svg>
  );
};
export default SquareDotted;