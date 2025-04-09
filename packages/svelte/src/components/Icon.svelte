<script>
  export let name;
  export let size = 24;
</script>

<svg
  width={size}
  height={size}
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="icon-title"
  viewBox="0 0 24 24"
  class="icon"
>
  <use href={`/src/assets/icons/${name}.svg#icon`} />
</svg>

<style>
  .icon {
    display: inline-block;
    fill: currentColor;
  }
</style>
