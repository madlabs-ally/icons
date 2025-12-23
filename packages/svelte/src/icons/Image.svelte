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
  <g clip-path="url(#clip0_2_132)">
<path d="M11.1789 20.4289L16.6334 14.6881C17.3884 13.8935 18.6423 13.8546 19.4451 14.6009L20.7727 15.8352" stroke="black" stroke-width="2" stroke-linecap="round"/>
<path d="M3.3277 18.8277L8.02561 13.6236C8.78301 12.7846 10.0847 12.7395 10.8984 13.524L14.4063 16.9062" stroke="black" stroke-width="2" stroke-linecap="round"/>
<circle cx="14.5" cy="8.5" r="1.75" stroke="black" stroke-width="1.5"/>
<rect x="3" y="3" width="18" height="18" rx="3" stroke="black" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0_2_132">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>