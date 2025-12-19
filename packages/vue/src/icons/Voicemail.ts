import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const Voicemail: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<rect x='3' y='9' width='6' height='6' rx='3' stroke='black' stroke-width='2'/><rect x='15' y='9' width='6' height='6' rx='3' stroke='black' stroke-width='2'/><rect x='19' y='14' width='2' height='14' rx='1' transform='rotate(90 19 14)' fill='black'/>"
  });
};

Voicemail.displayName = 'Voicemail';
export default Voicemail;