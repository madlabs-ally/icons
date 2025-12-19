<script lang="ts">
  export let size: number | string = 24;
  export let color: string = 'currentColor';
  export let strokeWidth: number | string = 2;
  export let width: number | string = size;
  export let height: number | string = size;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  {...$$restProps}
>
  <path d="M13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9L3 9C2.44771 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7L13 7Z" fill="#141313"/>
<path d="M21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11L21 11Z" fill="#141313"/>
<path d="M13 15C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17L3 17C2.44771 17 2 16.5523 2 16C2 15.4477 2.44772 15 3 15L13 15Z" fill="#141313"/>
<path d="M21 3C21.5523 3 22 3.44772 22 4C22 4.55228 21.5523 5 21 5L3 5C2.44772 5 2 4.55228 2 4C2 3.44772 2.44772 3 3 3L21 3Z" fill="#141313"/>
<path d="M21 19C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21L3 21C2.44772 21 2 20.5523 2 20C2 19.4477 2.44772 19 3 19L21 19Z" fill="#141313"/>
</svg>