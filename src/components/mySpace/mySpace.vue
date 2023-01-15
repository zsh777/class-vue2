<template>
  <div
    class="search-content gradinet-width"
    v-drag
    style="z-index: 1111; top: 10px; left: 118px; height: 100%"
  >
    <el-container class="aside">
      <el-aside width="200px">
        <el-menu
          background-color="#545c64"
          text-color="#ffffff"
          active-text-color="#ffd04b"
          :default-openeds="['1']"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-postcard"></i>信息修改</template
            >
            <el-menu-item-group>
              <el-menu-item index="/mySpace/showinfo"> 基本信息 </el-menu-item>
              <el-menu-item index="/mySpace/imageUp"> 头像修改 </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-setting"></i>设置</template
            >
            <el-menu-item-group>
              <el-menu-item @click="logout">注销登录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'mySpaceDetail',
  data() {
    return {}
  },
  beforeDestory() {},
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
    },
    logout() {
      this.$confirm('确定要退出吗', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('fullname')
        sessionStorage.clear()
        localStorage.clear()
        this.$router.push('/')
      })
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
  height: 100%;
}
.aside {
  height: 100%;
}
</style>
