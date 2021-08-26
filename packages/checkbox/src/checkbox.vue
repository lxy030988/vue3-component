<template>
  <div class="l-check-box">
    <span class="l-check-box__input">
      <input
        type="checkbox"
        v-model="model"
        @change="handleChange"
        :name="name"
        :disabled="disabled"
        :indeterminate="indeterminate"
      />
    </span>
    <span class="l-check-box__label">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCheckbox } from './useCheckbox'

export default defineComponent({
  name: 'LCheckBox',
  props: {
    modelValue: {
      type: [Boolean, Number, String],
    },
    label: {
      type: [String, Boolean, Number],
    },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: {
      type: String,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props) {
    return useCheckbox(props)
  },
})
</script>

<style scoped></style>
