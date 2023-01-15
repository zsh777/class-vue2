<template>
  <div>
    <div
      style="
        width: 14%;
        height: 130px;
        border-radius: 100px;
        display: inline-block;
      "
    >
      <img
        style="width: 100%; height: 100%; border-radius: 100px"
        src="/static/temporary/headpic.jpg"
        class="image"
      />
    </div>

    <br />
    <br />
    <el-descriptions :column="1" border>
      <el-descriptions-item label="用户名" v-model="username"
        ><p class="message">{{ username }}</p></el-descriptions-item
      >
      <el-descriptions-item label="邮箱号" v-model="email" class="message"
        ><p class="message">{{ email }}</p></el-descriptions-item
      >
      <el-descriptions-item label="白洞值" v-model="level" class="message"
        ><p class="message">{{ level }}</p></el-descriptions-item
      >
      <el-descriptions-item label="座右铭" v-model="motto" class="message"
        ><p class="message">{{ motto }}</p></el-descriptions-item
      >
      <el-descriptions-item label="居住地" v-model="city" class="message"
        ><p class="message">{{ city }}</p></el-descriptions-item
      >
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: 'mySpace',
  data() {
    return {
      username: 'Huterox',
      email: 18100000000,
      motto: '除非我不想赢，否则没人能让我输',
      city: '九江',
      level: 9999
    }
  }
}
</script>

<style scoped>
.message {
  width: 20em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
