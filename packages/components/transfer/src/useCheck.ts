import { computed, getCurrentInstance, watch } from 'vue'

import type { Props } from './transfer'

interface ITransferPanelProps {
  data: any[]
  props: Props
}

interface TransferPanelState {
  checked: any[]
  allChecked: boolean
}

export const useCheck = (props: ITransferPanelProps, panelState: TransferPanelState) => {
  const { emit } = getCurrentInstance()!

  const labelProp = computed(() => props.props.label || 'label')

  const keyProp = computed(() => props.props.key || 'key')

  const disabledProp = computed(() => props.props.disabled || 'disabled')

  const checkableData = computed(() => {
    return props.data.filter((item) => !item[disabledProp.value])
  })

  const handleAllCheckedChange = (value: boolean) => {
    panelState.allChecked = value
    panelState.checked = value ? checkableData.value.map((item: any) => item[keyProp.value]) : []
  }

  watch(
    () => panelState.checked,
    (val, oldVal) => {
      const keys = checkableData.value.map((item) => item[keyProp.value])
      panelState.allChecked = keys.every((item) => val.includes(item))
      emit('checked-change', panelState.checked)
    },
  )

  watch(
    () => props.data,
    () => {
      // panelState.checked = []
      panelState.allChecked = false
    },
  )

  return {
    labelProp,
    keyProp,
    disabledProp,
    handleAllCheckedChange,
  }
}
