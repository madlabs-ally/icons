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
  <g clip-path="url(#clip0_3387_139)">
<path d="M5.50001 21L17.4808 8.68007C17.8516 8.29882 18.4559 8.27444 18.8561 8.62458L21 10.5" stroke="black" stroke-width="2" stroke-linecap="round"/>
<circle cx="8.5" cy="8.5" r="1.75" stroke="black" stroke-width="1.5"/>
<rect x="3" y="3" width="18" height="18" rx="3" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_3387_139">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>