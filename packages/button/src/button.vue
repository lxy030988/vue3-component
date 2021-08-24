<template>
  <button :class="className">
    <i :class="'l-icon-' + icon"></i>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

type TButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'

export default defineComponent({
  name: 'LButton',
  props: {
    type: {
      type: String as any as PropType<TButtonType>,
      default: 'primary',
      // validator(v: string) {
      //   return [
      //     'primary',
      //     'success',
      //     'warning',
      //     'danger',
      //     'info',
      //     'text'
      //   ].includes(v)
      // }
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean,
  },
  setup(props, ctx) {
    const { type, disabled, loading, round } = props
    const className = computed(() => [
      'l-button',
      `l-button--${type}`,
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-round': round,
      },
    ])
    return { className }
  },
})
</script>
