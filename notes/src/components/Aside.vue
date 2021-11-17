<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      text-color="#ACD6FF"
      active-text-color="#ffaad5"
    >
      <h3 style="color: #0072e3" class="title">Lazy Note</h3>
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <i :class="'el-icon-' + item.icon" style="color: #66b3ff"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        :index="item.label"
        v-for="item in hasChildren"
        :key="item.path"
      >
        <template slot="title">
          <i :class="'el-icon-' + item.icon" style="color: #66b3ff"></i>
          <span slot="title" class="aside">{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="child.path"
            v-for="(child, childIndex) in item.children"
            :key="childIndex"
            @click="clickMenu(child)"
          >
            <i :class="'el-icon-' + child.icon" style="color: #66b3ff"></i>
            <span slot="title">{{ child.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Aside",
   data() {
      return {
        isCollapse:false,
        menu:[
          {
          path: "/",
          name: "catalogue",
          label: "笔记目录",
          icon: "tickets",
          url: "/catalogue",
        },
        // {
        //   path: "/notebook",
        //   name: "notebook",
        //   label: "笔记",
        //   icon: "notebook-1",
        //   url: "/notebook",
        // },
        {
          path: "/todo",
          name: "todo",
          label: "ToDoList",
          icon: "date",
          url: "/todo",
        }
      ],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({
        name: item.name
        });
        this.$store.commit('selectMenu',item)
        console.log(item);
      }
    },
    computed:{
      noChildren(){
        return this.menu.filter((item) => !item.children)
      },
      hasChildren(){
        return this.menu.filter((item) => item.children)
      },
      // ...mapState(['isCollapse'])
    },
    mounted() {
      this.$bus.$on('collapse',()=>{
        this.isCollapse = !this.isCollapse
      })
    },
    beforeDestroy() {
      this.$bus.$off('collapse')
    },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  height: 1000px;
}
.title {
  font-size: 25px;
  text-align: center;
  color: #db4c3f !important;
}
.el-menu-item{
    color: #dd9089 !important;
}
i{
    color: #dd9089 !important;
}
.el-menu-item-group{
  color: #dd9089 !important;
}
.el-submenu{
  color: #dd9089 !important;
}
</style>

<style lang="scss">
.el-submenu__title{
  color: #dd9089 !important;
}
.el-icon-menu{
  color: #886763;
}
</style>