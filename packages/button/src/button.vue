<template>
  <button :class="className" @click="handleClick">
    <i v-if="loading" class="'l-icon-loading"></i>
    <i v-if="icon && !loading" :class="'l-icon-' + icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
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
  emits: ['click'],
  setup(props, ctx) {
    // const { type, disabled, loading, round } = props //props结构出来就没响应式了
    const className = computed(() => [
      'l-button',
      `l-button--${props.type}`,
      {
        'is-disabled': props.disabled,
        'is-loading': props.loading,
        'is-round': props.round,
      },
    ])
    const handleClick = (e: any) => {
      ctx.emit('click', e)
    }
    return { className, handleClick }
  },
})
</script>
