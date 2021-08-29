<template>
  <div>
    <!-- css BEM 规范 -->
    <!-- <div class="l-xxx">
      <button class="l-xxx--primary is-readonly us-disabled"></button>
      <button class="l-xxx--success"></button>
      <div class="l-xxx__header"></div>
      <div class="l-xxx__body"></div>
      <div class="l-xxx__footer"></div>
    </div>-->

    <l-button icon="hebingzhuanfa" @click="click">bbbbb</l-button>
    <!-- <l-icon name="loading" /> -->
    <br />
    <br />
    <l-button-group>
      <l-button type="primary" icon="hebingzhuanfa">上一页</l-button>
      <l-button type="primary">
        下一页
        <i class="l-icon-hebingzhuanfa"></i>
      </l-button>
    </l-button-group>
    <hr />
    <l-row :gutter="20">
      <l-col :span="6">111</l-col>
      <l-col :span="6" :offset="2">111</l-col>
      <l-col :span="6">111</l-col>
      <l-col :span="6">111</l-col>
    </l-row>
    <hr />
    <!-- <l-check-box v-model="checkVal" @change="checkboxChange" disabled indeterminate>1</l-check-box> -->

    <l-check-box-group v-model="checkVal" @change="checkboxChange" disabled indeterminate>
      <l-check-box :label="1"></l-check-box>
      <l-check-box :label="2"></l-check-box>
      <l-check-box :label="3"></l-check-box>
      <l-check-box :label="4"></l-check-box>
    </l-check-box-group>
    <hr />

    <l-transfer v-model="rightValue" :data="transferData" :props="transferProp"></l-transfer>
    <hr />
    <!-- <l-message></l-message> -->
    <button @click="showMessage">显示弹框</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Message } from '@lxy/message'

const useButton = () => {
  const click = () => {
    console.log('click')
  }
  return { click }
}

const useCheckBox = () => {
  const checkVal = ref([2])
  const checkboxChange = (v: any) => {
    console.log('checkboxChange', v)
  }
  return { checkVal, checkboxChange }
}

const useTransfer = () => {
  const generateData = () => {
    const data = []
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `备选项 ${i}`,
        disabled: i % 4 === 0,
      })
    }
    return ref(data)
  }
  return {
    transferData: generateData(),
    rightValue: ref([2, 3]),
    leftValue: [],
    transferProp: {
      key: 'key',
      label: 'label',
      disabled: 'disabled',
    },
  }
}

export default defineComponent({
  name: 'App',
  setup() {
    const showMessage = () => {
      Message({
        center: true,
        type: 'success',
      })
    }
    return {
      showMessage,
      ...useButton(),
      ...useCheckBox(),
      ...useTransfer(),
    }
  },
})
</script>
<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
