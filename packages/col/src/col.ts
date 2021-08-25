import { computed, defineComponent, h, inject } from 'vue'

export default defineComponent({
  name: 'LCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { slots }) {
    const { gutter } = inject('LRow', { gutter: { value: 0 } })
    const style = computed(() => {
      if (gutter.value) {
        return {
          paddingLeft: gutter.value / 2 + 'px',
          paddingRight: gutter.value / 2 + 'px',
        }
      }
      return {}
    })

    const classList = computed(() => {
      const ret: string[] = []
      const pos = ['span', 'offset'] as const
      pos.forEach((prop) => {
        const size = props[prop]
        if (typeof size === 'number') {
          if (prop === 'span') ret.push(`l-col-${props[prop]}`)
          else if (size > 0) ret.push(`l-col-${prop}-${props[prop]}`)
        }
      })
      return ret
    })
    return () =>
      h(
        props.tag,
        {
          class: ['l-col', classList.value],
          style: style.value,
        },
        slots.default?.(),
      )
  },
})
