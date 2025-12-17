import { Component, ComponentProps } from 'solid-js';

const Bin: Component<ComponentProps<'svg'>> = (props) => {
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
      <mask id="path-1-inside-1_3404_96" fill="white">
<rect x="6" y="22" width="16" height="12" rx="1" transform="rotate(-90 6 22)"/>
</mask>
<rect x="6" y="22" width="16" height="12" rx="1" transform="rotate(-90 6 22)" stroke="black" stroke-width="4" mask="url(#path-1-inside-1_3404_96)"/>
<mask id="path-2-inside-2_3404_96" fill="white">
<rect x="9" y="8" width="6" height="6" rx="1" transform="rotate(-90 9 8)"/>
</mask>
<rect x="9" y="8" width="6" height="6" rx="1" transform="rotate(-90 9 8)" stroke="black" stroke-width="4" mask="url(#path-2-inside-2_3404_96)"/>
<rect x="20" y="6" width="2" height="16" rx="1" transform="rotate(90 20 6)" fill="#141313"/>
<rect x="9" y="11" width="2" height="6" rx="0.5" fill="#141313"/>
<rect x="13" y="11" width="2" height="6" rx="0.5" fill="#141313"/>
    </svg>
  );
};
export default Bin;