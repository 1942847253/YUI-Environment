<template>
   <div>
    <y-checkbox v-model="checked1.value">我已阅读并同意此协议</y-checkbox>
    <y-checkbox v-model="checked2">选项 1</y-checkbox>
    <y-checkbox v-model="checked3">选项 2</y-checkbox>
    <y-checkbox v-model="checked4">选项 3</y-checkbox>
   </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const checked1 = reactive({ value:true })
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
</script>

<style>
.y-checked-main input[type=checkbox]+label[data-v-ad1e8800]::after{
    top: 15%;
}
</style>
