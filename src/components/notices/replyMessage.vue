<template>
  <div style="background-color: rgba(239, 250, 246, 0.53)">
    <br />
    <div class="head" style="width: 90%; margin: 0 auto">
      <el-button style="margin-left: 90%" type="primary" plain
        >清空所有</el-button
      >
    </div>
    <br />
    <div style="width: 80%; margin-left: 1%; margin-top: 0px" class="main">
      <el-card shadow="hover" v-for="(message, index) in Messages" :key="index">
        <div style="height: 80px">
          <div
            style="
              width: 14%;
              height: 100%;
              border-radius: 10px;
              display: inline-block;
            "
          >
            <img
              style="
                width: 100%;
                height: 100%;
                border-radius: 100px;
                float: right;
              "
              src="@/assets/img/22.png"
              class="image"
            />
          </div>
          <div style="display: inline-block; margin-left: 5%">
            <p class="message">{{ message.id }}</p>
            <p class="message">
              {{ message.from }} 答复了你 &nbsp;&nbsp;<i
                class="el-icon-info"
              ></i>
            </p>
            <p style="font-weight: bold">
              {{ message.info }}
            </p>
            <p class="message">来自问答：{{ message.quiz }}</p>
          </div>
          <div style="display: inline-block; margin-left: 20%">
            <p>
              <el-button
                @click="removeUserById(message.info)"
                icon="el-icon-delete"
              ></el-button>
            </p>
            <p>
              {{ message.data }}
            </p>
          </div>
        </div>
        <br />
      </el-card>
    </div>
    <br />
    <div class="footer" style="margin: 0 auto; width: 100%">
      <div class="block">
        <el-pagination
          background
          layout="total, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aComment',
  data() {
    return {
      total: 3,
      Messages: [
        {
          id: '第1条消息',
          info: '7777 is best 并且非常地帅气',
          from: '7777',
          quiz: '小姐姐老是不回你信息怎么办',
          data: '2022-3-27'
        },
        {
          id: '第2条消息',
          info: '5555 is best 并且非常地帅气',
          from: '5555',
          quiz: '小姐姐老是不回你信息怎么办',
          data: '2022-3-27'
        },
        {
          id: '第3条消息',
          info: '6666 is best 并且非常地帅气',
          from: '6666',
          quiz: '小姐姐老是不回你信息怎么办',
          data: '2022-3-27'
        }
      ]
    }
  },
  methods: {
    async removeUserById(id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除信息,是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch((err) => {
        return err
      })
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
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
