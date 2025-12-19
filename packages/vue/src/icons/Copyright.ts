import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const Copyright: FunctionalComponent<SVGAttributes> = (props, context) => {
  const { attrs } = context;
  return h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    ...attrs,
    ...props,
    innerHTML: "<g clip-path='url(#clip0_14_3)'><circle cx='12' cy='12' r='9' stroke='black' stroke-width='2'/><path d='M14.4013 15.199C13.6024 15.7987 12.6079 16.0778 11.6136 15.9813C10.6193 15.8848 9.69705 15.4197 9.02834 14.6775C8.35962 13.9354 7.99283 12.9698 8.00011 11.9709C8.00738 10.9719 8.3882 10.0118 9.06765 9.27947C9.7471 8.54712 10.676 8.09552 11.6716 8.01351C12.6672 7.9315 13.6575 8.22501 14.4477 8.83631' stroke='black' stroke-width='2' stroke-linecap='round'/></g><defs><clipPath id='clip0_14_3'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

Copyright.displayName = 'Copyright';
export default Copyright;