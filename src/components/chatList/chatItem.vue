<template>

  <div class="chat-item">
    <el-avatar :shape="shapeType" v-if="chatRoomInfo.avatar" :src="chatRoomInfo.avatar"/>
    <el-avatar :shape="shapeType" v-else="chatRoomInfo.avatar">{{firstChar}}</el-avatar>
  </div>
</template>
<script lang="ts" setup>
// import { ref } from 'vue'
import { computed } from 'vue'
const props = defineProps({
  chatRoomInfo:{
    type: Object,
    default() {
      return {}
    }
  },
  shapeType:{
    type: String,
    default() {
      return 'square'
    }
  }
})
// 计算属性，用于获取 chatRoomInfo.name 的第一个字符
const firstChar = computed(() => {
  return props.chatRoomInfo.name ? props.chatRoomInfo.name.charAt(0) : ''
})
console.log(props.chatRoomInfo)
</script>
<style lang="less" scoped>
.chat-item{
  height: 40px;
  width: 40px;
  margin: 5px 0;
  cursor: pointer;
}
</style>