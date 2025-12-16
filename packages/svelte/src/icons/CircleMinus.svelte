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
  <g clip-path="url(#clip0_3387_114)">
<circle cx="12" cy="12" r="9" stroke="black" stroke-width="2"/>
<path d="M9 13C8.44772 13 8 12.5523 8 12V12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V12C16 12.5523 15.5523 13 15 13H9Z" fill="#141313"/>
</g>
<defs>
<clipPath id="clip0_3387_114">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>