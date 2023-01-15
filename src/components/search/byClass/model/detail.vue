<template>
  <div class="video">
    <div class="top">
      <span class="span1">视频详情</span>
      <img @click="close" class="buttonIcon" src="@/assets/button/close.png" alt="" />
    </div>
    <video width="1320px" height="500px" id="my-player" class="video-js" controls preload="auto" poster="//vjs.zencdn.net/v/oceans.png" data-setup="{}">
      <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm" />
      <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
    <div class="main1">
      <h1>课程简介</h1>
      <p>
        北京师范大学新世纪义务教育课程标准小学语文实验教科书是首批进入国家课程改革实验区的三套语文教材之一.在本套教材的编写和实验中,我们力图解决三个问题,一是学习语文的兴趣问题,让学生喜欢语文;二是学习语文的方法问题,让学生会学语文;三是人文性和工具性的统一,让语文学习的过程,既是学习语言文字的过程,又是学习现代文化知识的过程,还是接受现代文明熏陶、感染的过程.我们以"兴趣先导,学会学习、整体推进、文化积累"作为本套教材总的指导思想.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'videoDetail',
  methods: {
    close() {
      this.$parent.showDetail = false
    }
  }
}
</script>
<style scoped>
.video {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  overflow-x: auto;
}
h1 {
  color: #a7c942;
  text-align: center;
  letter-spacing: 8px;
}
p {
  letter-spacing: 2px;
  line-height: 20px;
  text-indent: 37px;
  text-shadow: 2px 2px gold;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-weight: bold;
}
</style>
