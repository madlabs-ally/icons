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
  <path d="M9 8C9 7.44772 9.44772 7 10 7V7C10.5523 7 11 7.44772 11 8V16C11 16.5523 10.5523 17 10 17V17C9.44772 17 9 16.5523 9 16V8Z" fill="#141313"/>
<path d="M13 8C13 7.44772 13.4477 7 14 7V7C14.5523 7 15 7.44772 15 8V16C15 16.5523 14.5523 17 14 17V17C13.4477 17 13 16.5523 13 16V8Z" fill="#141313"/>
</svg>