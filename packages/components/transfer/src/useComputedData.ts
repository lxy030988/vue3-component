import { computed } from 'vue'

import type { TransferProps } from './transfer'

export const useComputedData = (props: TransferProps) => {
  const propsKey = computed(() => props.props.key)

  const dataObj = computed(() => {
    return props.data.reduce((o: any, cur: any) => (o[cur[propsKey.value]] = cur) && o, {})
  })

  const sourceData = computed(() => {
    return props.data.filter((item: any) => !props.modelValue.includes(item[propsKey.value]))
  })

  const targetData = computed(() => {
    return props.modelValue.reduce((arr: any[], cur) => {
      const val = dataObj.value[cur]
      if (val) {
        arr.push(val)
      }
      return arr
    }, [])
  })

  return {
    propsKey,
    sourceData,
    targetData,
  }
}
