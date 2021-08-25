import { computed, defineComponent, h, provide } from 'vue'

export default defineComponent({
  name: 'LRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: 'start',
    },
  },
  setup(props, { slots }) {
    const gutter = computed(() => props.gutter)
    provide('LRow', {
      gutter,
    })

    const style = computed(() => {
      const ret = {
        marginLeft: '',
        marginRight: '',
      }
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    })
    return () =>
      h(
        props.tag,
        {
          class: ['l-row', props.justify !== 'start' ? `is-justify-${props.justify}` : ''], //, classList.value
          style: style.value,
        },
        slots.default?.(),
      )
  },
})
