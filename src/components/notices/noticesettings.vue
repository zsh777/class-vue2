<template>
  <div style="width: 70%">
    <el-card shadow="hover">
      <div style="display: inline-block; margin-left: 5%">
        <p>问答评论消息提醒</p>
      </div>
      <div style="display: inline-block; margin-left: 60%">
        <p>
          <el-switch v-model="askcommentvalue" active-text="开启"> </el-switch>
        </p>
      </div>
    </el-card>

    <el-card shadow="hover">
      <div style="display: inline-block; margin-left: 5%">
        <p>问答回答消息提醒</p>
      </div>
      <div style="display: inline-block; margin-left: 60%">
        <p>
          <el-switch v-model="askanswervalue" active-text="开启"> </el-switch>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'noticesettingsVue',
  data() {
    return {
      askcommentvalue: true,
      askanswervalue: true
    }
  }
}
</script>
<style scoped></style>
