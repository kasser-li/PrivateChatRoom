<template>
  <div>
    <el-row>
      <el-col :span="3">
        <div style="height: 60px;width:100%;background-color: cadetblue;">

        </div>
      </el-col>
      <el-col :span="1">
        <!-- 用户头像/个人设置 -->
        <UserAvatar></UserAvatar>
      </el-col>
    </el-row>
    <!-- logo -->


  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import UserAvatar from './userAvatar/index.vue'
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>