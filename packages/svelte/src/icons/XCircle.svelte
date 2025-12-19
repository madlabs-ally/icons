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
  <circle cx="12" cy="12" r="9" stroke="black" stroke-width="2"/>
<rect x="7.82843" y="9.17157" width="2" height="10" rx="1" transform="rotate(-45 7.82843 9.17157)" fill="black"/>
<rect x="9.24265" y="16.2426" width="2" height="10" rx="1" transform="rotate(-135 9.24265 16.2426)" fill="black"/>
</svg>