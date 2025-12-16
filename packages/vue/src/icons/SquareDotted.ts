import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const SquareDotted: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<rect x='3' y='3' width='18' height='18' rx='1' stroke='black' stroke-width='2' stroke-dasharray='4 4'/>"
  });
};

SquareDotted.displayName = 'SquareDotted';
export default SquareDotted;