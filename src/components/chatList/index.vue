<template>
    <div class="chat-container">
        <div class="chat-list">
            <!-- 聊天室列表 -->
            <chatItem v-for="chatRoomInfo in chatList" :chatRoomInfo="chatRoomInfo"></chatItem>

        </div>
        <!-- 新增/创建聊天室 -->
        <div class="add-chat-room">
            <el-button type="primary" circle>+</el-button>
        </div>
    </div>

</template>
<script lang="ts" setup>
import { ref } from 'vue'
import chatItem from './chatItem.vue'

const chatList = ref([{
    name: '张三',
    time: '2023-04-15 12:00',
    isTop: true,
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp562189934.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1746569281&t=2d80428cb94e97c611b2172cf78f8a62',
    content: '你好，我是张三。',
    unread: 10
},
{
    name: '李四',
    time: '2023-04-15 12:00',
    avatar: '',
},
{
    name: '李四',
    time: '2023-04-15 12:00',
    avatar: '',
},
{
    name: '李四',
    time: '2023-04-15 12:00',
    avatar: '',
},
{
    name: '李四',
    time: '2023-04-15 12:00',
    avatar: '',
},
{
    name: '李四',
    time: '2023-04-15 12:00',
    avatar: '',
},
{
    name: '李四',
    time: '2023-04-15 12:00',
    avatar: '',
},
{
    name: '李四',
    time: '2023-04-15 12:00',
    avatar: '',
},
])


</script>
<style lang="less">

.chat-container {
    position: relative;
    height: calc(100vh - 60px);
    width: 100%;
    background-color: #f5f5f5;
    padding: 10px;
    padding-bottom: 50px;
    overflow-y: auto;
}
.chat-list {
    // 居中
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}
.add-chat-room {
        position: absolute;
        height: 45px;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 5px;
        background-color: #f5f5f5;
    }
</style>