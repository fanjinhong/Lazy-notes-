<template>
  <div class="layout">
    <el-row :gutter="20"> 
      <el-col :span="6" v-for=" item in note" :key='item.index'
        ><div class="grid-content bg-purple">
          <div class="noteBox">
            <el-card class="box-card">
              <div slot="header" class="clearfix title">
                <span><strong>{{item.name}}</strong></span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="addNote" class="addnote"
                  >添加笔记 <i class="el-icon-circle-plus-outline"></i></el-button
                >
              </div>
              <br>
              <div v-for="noteTitle in item.noteTitle" :key="noteTitle.index" class="text item">
                {{noteTitle}}
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
      <el-col :span="6" class="addNoteCatagory">
          <a href=""><i class="el-icon-circle-plus-outline"></i></a>
      </el-col>
      <!-- <el-col :span="6"><div class="grid-content bg-purple">
          <div class="noteBox">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span><strong>CSS</strong></span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >添加笔记</el-button
                >
              </div>
              <br>
              <div v-for="o in 4" :key="o" class="text item">
                {{ "笔记 " + o }}
              </div>
            </el-card>
          </div>
      </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>
  </div>
</template>

<script>
export default {
  name: "note",
  data() {
    return {
        note:[
            {name:'HTML',noteTitle:['笔记1','笔记2','笔记3','笔记4']},
            {name:'CSS',noteTitle:['笔记1','笔记2','笔记3','笔记4']},
            {name:'Javascript',noteTitle:['笔记1','笔记2','笔记3','笔记4']},
            {name:'Webpack',noteTitle:['笔记1','笔记2','笔记3','笔记4']},
            {name:'Vue',noteTitle:['笔记1','笔记2','笔记3','笔记4']},
            {name:'React',noteTitle:['笔记1','笔记2','笔记3','笔记4']}
        ]
    };
  },
  methods: {
      addNote(){
          this.$router.push({
              name:'edit'
          })
      }
  },
};
</script>

<style lang='scss'>
.el-row {
  margin: 50px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  margin-bottom: 50px;
}
.bg-purple {
  position: relative;
  margin: 0 40px;
  background: white;
  height: 350px;
  border: 2px solid white;
  border-radius: 10px;
  .noteBox {
    position: absolute;
    width: 98%;
    height: 98%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;;
  }
}
.addNoteCatagory {
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  i {
    height: 100px;
    font-size: 50px;
    color: rgba($color: #db4c3f, $alpha: 0.5);
  }
}
.text {
  font-size: 14px;
}
.title{
  color:#db4c3f
}
.item {
  margin-bottom: 15px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  height: 100%;
  .addnote{
    color: #db4c3f !important;
  }
}
</style>