<template>
  <div class="card">
    <img src="@/assets/img/22.png" alt="" id="picture" />
    <input class="file-upload" type="file" accept="image/*" name="picture" />
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'imageUp',
  data() {
    return {
      filename: null,
      f64: null,
      loadImage: ''
    }
  },
  mounted() {
    /*
     * 点击图片，上传新图片
     * */
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
  }
}
</script>

<style scoped>
.file-upload {
  display: none;
}
</style>
