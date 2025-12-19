import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const CircleLoading: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<g clip-path='url(#clip0_21_168)'><path d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12' stroke='black' stroke-width='2' stroke-linecap='round'/></g><defs><clipPath id='clip0_21_168'><rect width='24' height='24' fill='white'/></clipPath></defs>"
  });
};

CircleLoading.displayName = 'CircleLoading';
export default CircleLoading;