<template>
    <popper
      v-bind="$attrs"
      :offset-distance="4"
      hover arrow placement="top"
    >
    <span class="popper-text">
        <slot />
    </span>
    
      <template #content="props">
        <slot name="content" v-bind="props" />
      </template>
    </popper>
  </template>
  <script>
  import Popper from 'vue3-popper'
  
  export default {
    name: 'Tip',
    components: {
      Popper,
    },
  }
  </script>
