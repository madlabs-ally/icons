import { Component, ComponentProps } from 'solid-js';

const Expand: Component<ComponentProps<'svg'>> = (props) => {
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
      <path d="M2 7V5C2 3.34315 3.34315 2 5 2H7M2 17V19C2 20.6569 3.34315 22 5 22H7M17 22H19C20.6569 22 22 20.6569 22 19V17M22 7V5C22 3.34315 20.6569 2 19 2H17" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
  );
};
export default Expand;