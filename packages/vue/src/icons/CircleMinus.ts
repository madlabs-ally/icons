import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const CircleMinus: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<circle cx='12' cy='12' r='9' stroke='black' stroke-width='2'/><path d='M9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9Z' fill='black'/>"
  });
};

CircleMinus.displayName = 'CircleMinus';
export default CircleMinus;