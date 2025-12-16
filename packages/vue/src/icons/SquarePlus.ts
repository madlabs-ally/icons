import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const SquarePlus: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<path d='M3 4C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2L21 2C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4L3 4Z' fill='#141313'/><path d='M3 22C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20L21 20C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22L3 22Z' fill='#141313'/><path d='M2 3C2 2.44772 2.44772 2 3 2C3.55228 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21L2 3Z' fill='#141313'/><path d='M20 3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3Z' fill='#141313'/><path d='M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V7Z' fill='#141313'/><path d='M7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11L17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13L7 13Z' fill='#141313'/>"
  });
};

SquarePlus.displayName = 'SquarePlus';
export default SquarePlus;