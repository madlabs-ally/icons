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
  <path d="M3 7C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5L21 5C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7L3 7Z" fill="black"/>
<path d="M15 7V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V7" stroke="black" stroke-width="2"/>
<path d="M6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5" stroke="black" stroke-width="2"/>
</svg>