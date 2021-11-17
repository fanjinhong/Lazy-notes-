<template>
  <header>
    <div class="left-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="collapse"
      ></el-button>
      <!-- <el-breadcrumb style="margin-left:10px">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item ><router-link  href="/" v-if="currentMenu && currentMenu.name !== 'Home' " :to="{ path: currentMenu.path }"><span>   / </span>{{currentMenu.label}}</router-link></el-breadcrumb-item>
      </el-breadcrumb> -->
    </div>
    <div class="right-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">
            <button class="logout" @click="logout">登出</button>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      userImg: require("../common/img/imagesback.jpg"),
    };
  },
  methods: {
    collapse() {
      this.$bus.$emit("collapse");
    },
    logout(){
        this.$router.push({
            name:'login'
        })
    }
  },
  computed: {
    ...mapState(["currentMenu"]),
  },
};
</script>

<style scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.left-content {
  display: flex;
  align-items: center;
  /* height: 60%; */
}
.right-content .user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0;
}
</style>

<style>
.el-header {
  background-color: #e96f63;
}
.logout {
  border: 0;
  background-color: transparent;
  outline: none;
}
.el-dropdown-item{
    color: #e96f63;
}
</style>

<style lang="scss">
    el-popper{
        color: #dd9089 !important;
    }
</style>