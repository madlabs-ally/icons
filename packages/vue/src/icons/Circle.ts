import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const Circle: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<circle cx='12' cy='12' r='9' stroke='black' stroke-width='2'/>"
  });
};

Circle.displayName = 'Circle';
export default Circle;