<template>
  <div>
    <el-container style="height:100%">
      <el-aside width="auto">
          <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main :style="{ 'padding-top': 0}">
          <keep-alive exclude="Editor">
              <router-view></router-view>
          </keep-alive>
          
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Notes from "./NoteCatagory.vue";
import Header from "../components/Header.vue";
import Aside from "../components/Aside.vue"
import { setTimeout } from "timers";
export default {
  data() {
    return {
      username: "",
      user: "",
      // content:"",
      // isClear: false//清除富文本编辑器内容
    };
  },
  components: { Notes, Header, Aside },
  mounted() {
    // this.$nextTick(()=>{
    //     this.get_all()
    //     this.username=localStorage.getItem('username')
    // })
  },
  methods: {
    // get_all(){
    //     this.$api.user.allUsers({}).then(({data})=>{
    //         if(data.status=='0'){
    //             this.user=data.result
    //         }else {
    //             this.$message.error(data.msg);
    //             let _this=this
    //             setTimeout(function(){
    //                 _this.$router.push('/login')
    //             },3000)
    //         }
    //     })
    // },
    // del_user(index){
    //     let id=this.user[index]._id
    //     console.log(id)
    //     this.$api.user.delUser({id}).then(({data})=>{
    //         if(data.status=='0'){
    //             this.$message.success(data.msg);
    //             this.get_all()
    //         }else {
    //             this.$message.error(data.msg);
    //         }
    //     })
    // },
    logout() {
      this.$store.dispatch("UserLogout");
      if (!this.$store.state.token) {
        this.$router.push("/login");
      } else {
        this.$message.error("退出失败");
      }
    },
    change(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

a {
  color: #42b983;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}

</style>