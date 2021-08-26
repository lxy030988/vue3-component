import { ref, computed, getCurrentInstance, WritableComputedRef } from 'vue'
import { toTypeString } from '@vue/shared'
import type { ICheckboxProps } from './checkbox.type'

// export const useCheckboxGroup = () => {
//   const ELEMENT = useGlobalConfig()
//   const elForm = inject(elFormKey, {} as ElFormContext)
//   const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)
//   const checkboxGroup = inject<ICheckboxGroupInstance>('CheckboxGroup', {})
//   const isGroup = computed(() => checkboxGroup && checkboxGroup?.name === 'ElCheckboxGroup')
//   const elFormItemSize = computed(() => {
//     return elFormItem.size
//   })
//   return {
//     isGroup,
//     checkboxGroup,
//     elForm,
//     ELEMENT,
//     elFormItemSize,
//     elFormItem,
//   }
// }

const useModel = (props: ICheckboxProps) => {
  const { emit } = getCurrentInstance()!
  const isLimitExceeded = ref(false)

  const model = computed({
    get() {
      return props.modelValue
    },
    set(val: any) {
      emit('update:modelValue', val)
    },
  })

  return {
    model,
    isLimitExceeded,
  }
}

const useCheckboxStatus = (props: ICheckboxProps, { model }: { model: WritableComputedRef<unknown> }) => {
  const isChecked = computed(() => {
    const value = model.value
    if (toTypeString(value) === '[object Boolean]') {
      return value
    } else if (Array.isArray(value)) {
      return value.includes(props.label)
    } else if (value !== null && value !== undefined) {
      // return value === props.trueLabel
    }
  })

  return {
    isChecked,
  }
}

// const useDisabled = (
//   props: IUseCheckboxProps,
//   { model, isChecked }: PartialReturnType<typeof useModel> & PartialReturnType<typeof useCheckboxStatus>,
// ) => {
//   const { elForm, isGroup, checkboxGroup } = useCheckboxGroup()
//   const isLimitDisabled = computed(() => {
//     const max = checkboxGroup.max?.value
//     const min = checkboxGroup.min?.value
//     return (
//       (!!(max || min) && model.value.length >= max && !isChecked.value) ||
//       (model.value.length <= min && isChecked.value)
//     )
//   })
//   const isDisabled = computed(() => {
//     const disabled = props.disabled || elForm.disabled
//     return isGroup.value
//       ? checkboxGroup.disabled?.value || disabled || isLimitDisabled.value
//       : props.disabled || elForm.disabled
//   })

//   return {
//     isDisabled,
//     isLimitDisabled,
//   }
// }

// const setStoreValue = (props: IUseCheckboxProps, { model }: PartialReturnType<typeof useModel>) => {
//   function addToStore() {
//     if (Array.isArray(model.value) && !model.value.includes(props.label)) {
//       model.value.push(props.label)
//     } else {
//       model.value = props.trueLabel || true
//     }
//   }
//   props.checked && addToStore()
// }

const useEvent = (props: ICheckboxProps) => {
  const { emit } = getCurrentInstance()!
  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement
    const value = target.checked ? true : false
    emit('change', value, e)
  }

  // watch(
  //   () => props.modelValue,
  //   (val) => {
  //     elFormItem.formItemMitt?.emit('el.form.change', [val])
  //   },
  // )

  return {
    handleChange,
  }
}

export const useCheckbox = (props: ICheckboxProps) => {
  const { model } = useModel(props)
  const { isChecked } = useCheckboxStatus(props, { model })
  // const { isDisabled } = useDisabled(props, { model, isChecked })
  const { handleChange } = useEvent(props)

  // setStoreValue(props, { model })

  return {
    model,
    isChecked,
    // isDisabled,
    // checkboxSize,
    handleChange,
    // focus,
    // size,
  }
}
