import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const ToggleRight: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<rect x='4' y='7' width='16' height='10' rx='5' stroke='black' stroke-width='2'/><circle cx='15' cy='12' r='2' fill='black' stroke='black' stroke-width='2'/>"
  });
};

ToggleRight.displayName = 'ToggleRight';
export default ToggleRight;