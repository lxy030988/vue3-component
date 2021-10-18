<template>
  <div class="l-transfer">
    <l-transfer-panel :data="sourceData" :props="props" @checked-change="onSourceCheckedChange"></l-transfer-panel>
    <div class="l-transfer__buttons">
      <l-button type="primary" icon="hebingzhuanfa" :disabled="rightChecked.length === 0" @click="addToLeft"></l-button>
      <l-button type="primary" icon="quanping" :disabled="leftChecked.length === 0" @click="addToRight"></l-button>
    </div>
    <l-transfer-panel :data="targetData" :props="props" @checked-change="onTargetCheckedChange"></l-transfer-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue'
import LTransferPanel from './transfer-panel.vue'
import LButton from '../../button'
import type { DataItem, Key, Props } from './transfer'
import { useComputedData } from './useComputedData'

export default defineComponent({
  name: 'LTransfer',
  components: { LTransferPanel, LButton },
  props: {
    data: {
      type: Array as PropType<DataItem[]>,
      default: () => [],
    },
    modelValue: {
      type: Array as PropType<Key[]>,
      default: () => [],
    },
    props: {
      type: Object as PropType<Props>,
      default: () => ({
        label: 'label',
        key: 'key',
        disabled: 'disabled',
      }),
    },
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const checkedState = reactive<{
      leftChecked: any[]
      rightChecked: any[]
    }>({
      leftChecked: [],
      rightChecked: [],
    })

    const onSourceCheckedChange = (val: Key[], movedKeys: Key[]) => {
      checkedState.leftChecked = val
    }

    const onTargetCheckedChange = (val: Key[], movedKeys: Key[]) => {
      checkedState.rightChecked = val
    }

    const addToLeft = () => {
      console.log('addToLeft')
      const currentValue = props.modelValue.slice()
      checkedState.rightChecked.forEach((item) => {
        const index = currentValue.indexOf(item)
        if (index > -1) {
          currentValue.splice(index, 1)
        }
      })
      emit('update:modelValue', currentValue)
    }

    const addToRight = () => {
      // let currentValue = props.modelValue.slice()
      // const itemsToBeMoved = props.data
      //   .filter((item: DataItem) => {
      //     const itemKey = item[propsKey.value]
      //     return checkedState.leftChecked.includes(itemKey) && !props.modelValue.includes(itemKey)
      //   })
      //   .map(item => item[propsKey.value])
      // currentValue = props.targetOrder === 'unshift'
      //   ? itemsToBeMoved.concat(currentValue)
      //   : currentValue.concat(itemsToBeMoved)
      // _emit(currentValue, 'right', checkedState.leftChecked)
    }

    return {
      ...useComputedData(props),
      ...toRefs(checkedState),
      onSourceCheckedChange,
      onTargetCheckedChange,
      addToLeft,
      addToRight,
    }
  },
})
</script>

<style scoped></style>
