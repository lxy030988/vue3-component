import { ref, computed, getCurrentInstance, WritableComputedRef, inject } from 'vue'
import { toTypeString } from '@vue/shared'
import type { ICheckboxGroupInstance, ICheckboxProps } from './checkbox.type'

export const useCheckboxGroup = () => {
  const checkboxGroup = inject<ICheckboxGroupInstance>('LCheckboxGroup', {})

  const isGroup = computed(() => checkboxGroup && checkboxGroup?.name === 'LCheckboxGroup')

  return {
    isGroup,
    checkboxGroup,
  }
}

const useModel = (props: ICheckboxProps) => {
  const { emit } = getCurrentInstance()!
  const isLimitExceeded = ref(false)
  const { isGroup, checkboxGroup } = useCheckboxGroup()
  const store = computed(() => (checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue))

  const model = computed({
    get() {
      return isGroup.value ? store.value : props.modelValue
    },
    set(val: any) {
      if (isGroup.value && Array.isArray(val)) {
        checkboxGroup?.changeEvent?.(val)
      } else {
        emit('update:modelValue', val)
      }
    },
  })

  return {
    model,
    isLimitExceeded,
  }
}

const useCheckboxStatus = (props: ICheckboxProps, { model }: { model: WritableComputedRef<any> }) => {
  const isChecked = computed(() => {
    const value = model.value
    // console.log(value, props.label)
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

// const setStoreValue = (props: ICheckboxProps, { model }: { model: WritableComputedRef<any> }) => {
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
