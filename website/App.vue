<template>
  <div>
    <!-- css BEM 规范 -->
    <!-- <div class="l-xxx">
      <button class="l-xxx--primary is-readonly us-disabled"></button>
      <button class="l-xxx--success"></button>
      <div class="l-xxx__header"></div>
      <div class="l-xxx__body"></div>
      <div class="l-xxx__footer"></div>
    </div> -->

    <l-button icon="hebingzhuanfa" @click="click">bbbbb</l-button>
    <!-- <l-icon name="loading" /> -->
    <br />
    <br />
    <l-button-group>
      <l-button type="primary" icon="hebingzhuanfa">上一页</l-button>
      <l-button type="primary">下一页<i class="l-icon-hebingzhuanfa"></i></l-button>
    </l-button-group>
    <hr />
    <l-row :gutter="20">
      <l-col :span="6">111</l-col>
      <l-col :span="6" :offset="2">111</l-col>
      <l-col :span="6">111</l-col>
      <l-col :span="6">111</l-col>
    </l-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const useButton = () => {
  const click = () => {
    console.log('click')
  }
  return { click }
}
export default defineComponent({
  name: 'App',
  setup() {
    return {
      ...useButton(),
    }
  },
})
</script>
