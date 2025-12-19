import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const Minimize: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<path d='M2 9H5C6.65685 9 8 7.65685 8 6V3M2 15H5C6.65685 15 8 16.3431 8 18V21M16 21V18C16 16.3431 17.3431 15 19 15H22M22 9H19C17.3431 9 16 7.65685 16 6V3' stroke='black' stroke-width='2' stroke-linecap='round'/>"
  });
};

Minimize.displayName = 'Minimize';
export default Minimize;