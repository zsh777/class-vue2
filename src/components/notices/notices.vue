<template>
  <div class="search-content gradinet-width" v-drag style="z-index: 1111; top: 10px; left: 118px; height: 100%">
    <el-header style="height: 50px">
      <span @click="close"><img class="buttonIcon" src="../../assets/button/close.png" /></span>
    </el-header>
    <el-container class="aside">
      <el-aside width="200px">
        <el-menu background-color="#545c64" text-color="#ffffff" active-text-color="#ffd04b" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>问答消息</template>
            <el-menu-item-group>
              <el-menu-item index="/aComment">
                <el-badge :value="999" :max="999" class="item">
                  评论消息
                </el-badge>
              </el-menu-item>
              <el-menu-item index="thumbNews"> 点赞消息 </el-menu-item>
              <el-menu-item index="/index/replyMessage">
                回答消息
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message-solid"></i>系统通知</template>
            <el-menu-item-group>
              <el-menu-item index="/notices/auditInformation">
                审核消息
              </el-menu-item>
              <el-menu-item index="/notices/activeMessage">
                活动消息
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-s-custom"></i>好友</template>
            <el-menu-item-group>
              <el-menu-item index="/notices/friendVerification">
                好友验证
              </el-menu-item>
              <el-menu-item index="/notices/friendsMessage">
                好友消息
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i>设置</template>
            <el-menu-item-group>
              <el-menu-item index="/notices/noticesettings">消息设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'noticesDetail',
  data() {
    return {}
  },
  beforeDestory() { },
  // 自定义指令 实现可拖动
  directives: {
    drag(el) {
      el.onmousedown = function (e) {
        var disx = e.pageX - el.offsetLeft
        var disy = e.pageY - el.offsetTop
        document.onmousemove = function (e) {
          el.style.left = e.pageX - disx + 'px'
          el.style.top = e.pageY - disy + 'px'
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null
        }
      }
    }
  },
  methods: {
    close() {
      document.getElementById('indexDiv').__vue__.handleActive('')
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #e5efe2;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.router-link-active {
  text-decoration: none;
}

.alink {
  text-decoration: none;
}
.search-content {
  position: absolute;
  width: 100%;
  max-width: 80%;
  background: #ffffff;
}
.gradinet-width {
  animation: animateWidth 0.5s linear 1;
}
.buttonIcon {
  float: right;
}
.el-menu {
  height: 93%;
}
.aside {
  height: 100%;
}
</style>
