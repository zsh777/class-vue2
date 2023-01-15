<template>
  <!-- 头部 -->
  <div class="bar-box" id="indexDiv">
    <div class="bar">
      <div class="container">
        <AllClass v-if="type === 'all'"></AllClass>
        <Class v-if="type === 'class'"></Class>
        <Notices v-if="type === 'notices'"></Notices>
        <MySpace v-if="type === 'mySpace'"></MySpace>
      </div>
    </div>
  </div>
</template>

<script>
import AllClass from '../components/all/index.vue'
import Class from '../components/search/byClass/index.vue'
import Notices from '../components/notices/notices.vue'
import MySpace from '../components/mySpace/mySpace'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  components: {
    AllClass,
    Class,
    Notices,
    MySpace
  },
  data() {
    return {
      type: '',
      showModal: false
    }
  },
  mounted() {},
  methods: {
    handleActive(type) {
      // console.log('type', type)
      this.type = type
      this.showModal = false
    }
  }
}
</script>
<style scoped>
.bar-box {
  position: relative;
  padding: 24px 24px 24px 24px;
  width: calc(100% - 48px);
  height: calc(100% - 84px);
  overflow: hidden;
  background: url('../assets/img/1.gif');
  background-size: 100% 100%;
}
.bar-box .bar {
  width: 100%;
  height: calc(100% - 24px);
  overflow: hidden;
}
.bar-box .bar .container {
  position: relative;
  height: 100%;
}
</style>
