<template>
  <div class="textBox">
    <br />
    <input type="text" class="title" v-model="title" placeholder="请输入标题" />
    <br /><br />
    <div id="editor" class="editor"></div>
    <div class="btn">
      <el-button type="info" round class="exit" @click="exitEditor">退出</el-button>
      <el-button type="danger" round class="add">保存</el-button>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "Editor",
  data() {
    return {
      editor: "",
      title: "",
      userid: "",
    };
  },
  mounted() {
    this.editor = new E("#editor");
    this.editor.config.uploadImgShowBase64 = true;
    this.editor.config.showLinkImg = false;
    this.editor.create();
    this.editor.txt.html();
  },
  methods: {
    submit() {
      var data = FormData();
      data.append("title", this.title);
      data.append("content", this.editor.txt.html);

      this.$axios({
        methdo: post,
        url: "",
        data: data,
      })
        .then((res) => {
          if (res.state == 200) {
            console.log("success");
          }
        })
        .catch((res) => {
          console.log(res);
        });
    },
    exitEditor(){
        this.$router.push({
            name:'index'
        })
    }
  },
};
</script>

<style lang="scss">
.textBox{
    width: 50%;
    height: 70%;
    margin: 0 auto;
}
.title {
  width: 100%;
  font-size: 20px;
}
.btn{
    margin-top: 10px;
    .add{
        float: right;
        margin-right: 20px;
    }
    .exit{
        float:right;
        margin-right: 20px;
    }
}

</style>