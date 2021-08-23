<template>
  <i :class="className"></i>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'LIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const className = computed(() => 'l-icon-' + props.name)
    return { className }
  }
})
</script>
