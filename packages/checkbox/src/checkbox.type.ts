import { ComputedRef } from 'vue'
// import { AnyFunction } from '@element-plus/utils/types'
export interface ICheckboxGroupInstance {
  name?: string
  modelValue?: ComputedRef
  disabled?: ComputedRef<boolean>
  min?: ComputedRef<string | number>
  max?: ComputedRef<string | number>
  size?: ComputedRef<string>
  fill?: ComputedRef<string>
  textColor?: ComputedRef<string>
  checkboxGroupSize?: ComputedRef<string>
  changeEvent?: any
}

export interface ICheckboxProps {
  indeterminate?: boolean
  checked?: boolean
  disabled?: boolean
  name?: string
  label?: string | number | boolean
  modelValue?: string | number | boolean
}
