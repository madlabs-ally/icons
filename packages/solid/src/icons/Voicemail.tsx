import { Component, ComponentProps } from 'solid-js';

const Voicemail: Component<ComponentProps<'svg'>> = (props) => {
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
      <rect x="3" y="9" width="6" height="6" rx="3" stroke="black" stroke-width="2"/>
<rect x="15" y="9" width="6" height="6" rx="3" stroke="black" stroke-width="2"/>
<rect x="19" y="14" width="2" height="14" rx="1" transform="rotate(90 19 14)" fill="black"/>
    </svg>
  );
};
export default Voicemail;