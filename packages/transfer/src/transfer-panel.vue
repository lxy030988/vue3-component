<template>
  <div class="l-transfer__panel">
    <l-checkbox v-model="allChecked" @change="handleAllCheckedChange">全选</l-checkbox>
    <div class="l-transfer__body">
      <l-check-box-group v-model="checked">
        <l-check-box
          v-for="item in data"
          :key="item[keyProp]"
          class="el-transfer__panel__item"
          :label="item[keyProp]"
          :disabled="item[disabledProp]"
          >{{ item[labelProp] }}</l-check-box
        >
      </l-check-box-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue'
import { Props } from './transfer'
import LCheckbox from '../../checkbox'
import LCheckboxGroup from '../../checkbox-group'
import { useCheck } from './useCheck'

export default defineComponent({
  name: 'LTransferPanel',
  components: { LCheckbox, LCheckboxGroup },
  props: {
    data: {
      type: Array,
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
  emits: ['checked-change'],
  setup(props) {
    const panelState = reactive({
      checked: [],
      allChecked: false,
    })

    return {
      ...toRefs(panelState),
      ...useCheck(props, panelState),
    }
  },
})
</script>

<style scoped></style>
