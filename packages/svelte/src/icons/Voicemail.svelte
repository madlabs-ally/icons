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
  <rect x="3" y="9" width="6" height="6" rx="3" stroke="black" stroke-width="2"/>
<rect x="15" y="9" width="6" height="6" rx="3" stroke="black" stroke-width="2"/>
<rect x="19" y="14" width="2" height="14" rx="1" transform="rotate(90 19 14)" fill="black"/>
</svg>