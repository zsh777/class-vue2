<template>
  <div>
    <div style="
        width: 14%;
        height: 130px;
        border-radius: 100px;
        display: inline-block;
      ">
      <img style="width: 100px; height: 100px; border-radius: 100px" src="@/assets/img/22.png" class="image" id="picture" />
      <input class="file-upload" type="file" accept=".jpg,.png" name="file" />
    </div>
    <br />
    <br />
    <el-descriptions :column="1" border>
      <el-descriptions-item label="用户名" v-model="username">
        <p class="message">{{ username }}</p>
      </el-descriptions-item>
      <el-descriptions-item label="邮箱号" v-model="email" class="message">
        <p class="message">{{ email }}</p>
      </el-descriptions-item>
      <el-descriptions-item label="性别" v-model="level" class="message">
        <p class="message">{{ sex }}</p>
      </el-descriptions-item>
      <el-descriptions-item label="座右铭" v-model="motto" class="message">
        <p class="message">{{ motto }}</p>
      </el-descriptions-item>
      <el-descriptions-item label="职业" v-model="motto" class="message">
        <p class="message">{{ zhiye }}</p>
      </el-descriptions-item>
      <el-descriptions-item label="爱好" v-model="motto" class="message">
        <p class="message">{{ hobby }}</p>
      </el-descriptions-item>
      <el-descriptions-item label="账号" v-model="motto" class="message">
        <p class="message">{{ zhanghao }}</p>
      </el-descriptions-item>
      <el-descriptions-item label="居住地" v-model="city" class="message">
        <p class="message">{{ city }}</p>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'showinfoVue',
  data() {
    return {
      username: '77777',
      email: 18100000000,
      sex: '男',
      motto: '除非我不想赢，否则没人能让我输',
      zhiye: '教师',
      hobby: '唱跳,篮球',
      city: '北京',
      zhanghao: '183399224213',
      level: 9999,
      filename: null,
      f64: null,
      loadImage: ''
    }
  },
  mounted() {
    // 点击图片上传新图片
    $(document).on('click', '#picture', function () {
      // 点击图片的同时，点击上传文件的input
      $('.file-upload').click()
      // 将上传的图片显示到页面上
      $(document).on('change', '.file-upload', function () {
        var fileObj = $('.file-upload')[0]
        var img = document.getElementById('picture') //获得用户上传的图片节点
        var reader = new FileReader()
        // 转换成功后的操作，img.src即为转换后的DataURL
        reader.onload = function (e) {
          if (reader.readyState === 2) {
            //加载完毕后赋值
            img.src = e.target.result
            img.style.height = '100px'
            img.style.width = '100px'
            img.style.borderRadius = '100px'
          }
        }
        reader.readAsDataURL(fileObj.files[0])
      })
    })
  },
  methods: {}
}
</script>

<style scoped>
.message {
  width: 30em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.file-upload {
  display: none;
}
</style>
