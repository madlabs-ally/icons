import { h, type FunctionalComponent, type SVGAttributes } from 'vue';

const Import: FunctionalComponent<SVGAttributes> = (props, context) => {
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
    innerHTML: "<path d='M15.5 10H20C21.1046 10 22 10.8954 22 12V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V12C2 10.8954 2.89543 10 4 10H8.5' stroke='black' stroke-width='2' stroke-linecap='round'/><path d='M11 5C11 4.44772 11.4477 4 12 4V4C12.5523 4 13 4.44772 13 5V17C13 17.5523 12.5523 18 12 18V18C11.4477 18 11 17.5523 11 17V5Z' fill='#141313'/><path d='M8.70711 15.1213C8.31658 14.7308 8.31658 14.0976 8.70711 13.7071V13.7071C9.09763 13.3166 9.7308 13.3166 10.1213 13.7071L12.5962 16.182C12.7915 16.3772 12.7915 16.6938 12.5962 16.8891L11.8891 17.5962C11.6938 17.7915 11.3772 17.7915 11.182 17.5962L8.70711 15.1213Z' fill='#141313'/><path d='M12.7678 17.5962C12.5725 17.7914 12.2559 17.7914 12.0607 17.5962L11.3536 16.8891C11.1583 16.6938 11.1583 16.3772 11.3536 16.182L13.8284 13.7071C14.219 13.3166 14.8521 13.3166 15.2426 13.7071V13.7071C15.6332 14.0976 15.6332 14.7308 15.2426 15.1213L12.7678 17.5962Z' fill='#141313'/>"
  });
};

Import.displayName = 'Import';
export default Import;