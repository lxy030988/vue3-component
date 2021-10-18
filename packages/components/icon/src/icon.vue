<template>
  <i :class="className" :style="style"></i>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { iconProps } from './icon'

export default defineComponent({
  name: 'LIcon',
  props: iconProps,
  setup(props) {
    const className = computed(() => 'l-icon-' + props.name)

    const style = computed(() => {
      if (!props.size && !props.color) {
        return {}
      }
      return {
        ...(props.size ? { 'font-size': props.size + 'px' } : {}),
        ...(props.color ? { color: props.color } : {}),
      }
    })
    return { className, style }
  },
})
</script>
