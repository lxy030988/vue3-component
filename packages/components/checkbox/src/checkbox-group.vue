<template>
  <div class="l-check-box-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, provide } from 'vue'

export default defineComponent({
  name: 'LCheckBoxGroup',
  props: {
    modelValue: {
      type: [Object, Boolean, Array],
    },
  },
  emits: ['change', 'update:modelValue'],
  setup(props, ctx) {
    const changeEvent = (value: any) => {
      ctx.emit('update:modelValue', value)
      nextTick(() => {
        ctx.emit('change', value)
      })
    }

    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      },
    })

    provide('LCheckboxGroup', {
      name: 'LCheckboxGroup',
      modelValue,
      changeEvent,
    })

    return {}
  },
})
</script>

<style scoped></style>
