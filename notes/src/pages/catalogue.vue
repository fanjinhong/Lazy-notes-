<template>
    <div id="catelogue">
        <div id="myChart" :style="{width: '500px', height: '800px'}"></div>
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
        <div v-for="(item,index) in arr" :key="index" :id="item.id" :style="{width: '500px', height: '800px'}">
            {{item}}
        </div>
        <div class="abc">
            <div @click="add()">点我</div>
            <input type="text" v-model="val" name="" id="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Catelogue',
        mounted() {
            this.drawLine();
        },
        data() {
            return {
                myChart: '',
                val: '',
                now: '',
                data: '',
                arr: [{
                    name: 'vue',
                    id: 'echart0',
                    children: [{
                        name: '新建文件夹'
                    }, {
                        name: 'vuex',
                        children: [{
                            name: '显示笔记'
                        }, {
                            name: '添加笔记'
                        }]
                    }]
                }, {
                    name: 'react',
                    id: 'echart1',
                    children: [{
                        name: '新建文件夹'
                    }]
                }]
            }
        },
        methods: {
            open() {
                //<el-input  placeholder = "请输入笔记名称"> </el-input>
                this.$alert(  <el-input placeholder = "请输入笔记名称"></el-input>, '添加笔记', {
                    confirmButtonText: '确定',
                    callback: () => {
                        if(this.val != '') {
                            this.add();
                            this.$message({
                            type: 'info',
                            message: `添加成功`
                            });
                        } else {
                            this.$message({
                            type: 'info',
                            message: `添加失败`
                            });
                        }
                    }
                });
        },
        add() {
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            this.data.children.push({
                name: this.val
            })
            let a = this.data;
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                series: [{
                    type: 'tree',
                    id: 0,
                    name: 'tree1',
                    data: [a],
                    top: '10%',
                    left: '8%',
                    bottom: '22%',
                    right: '20%',
                    symbolSize: 7,
                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 3,
                    lineStyle: {
                        width: 2
                    },
                    label: {
                        backgroundColor: '#fff',
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }]
            });
        },
        drawLine() {
            let myChart1; // eslint-disable-line no-unused-vars
            for (let i = 0; i < this.arr.length; i++) {
                myChart1 = 'myChart' + i;
                let id = 'echart' + i;
                myChart1 = this.$echarts.init(document.getElementById(id))
                myChart1.setOption({
                    tooltip: {
                        trigger: 'item',
                        triggerOn: 'mousemove'
                    },
                    series: [{
                        type: 'tree',
                        id: 0,
                        name: 'tree1',
                        data: [this.arr[i]],
                        top: '10%',
                        left: '8%',
                        bottom: '22%',
                        right: '20%',
                        symbolSize: 7,
                        edgeShape: 'polyline',
                        edgeForkPosition: '63%',
                        initialTreeDepth: 3,
                        lineStyle: {
                            width: 2
                        },
                        label: {
                            backgroundColor: '#fff',
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                        },
                        leaves: {
                            label: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        },
                        emphasis: {
                            focus: 'descendant'
                        },
                        expandAndCollapse: true,
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    }]
                });

            }
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            const data = {
                name: 'vue',
                children: [{
                        name: '新建文件',
                    },
                    {
                        name: 'fan',
                        src: 'www.baidu.com',
                        children: [{
                                name: '显示笔记',
                                value: 721
                            },
                            {
                                name: '新建笔记',
                                value: 721
                            }
                        ]
                    },
                    {
                        name: 'display',
                        children: [{
                                name: 'DirtySprite',
                                value: 8833
                            },
                            {
                                name: 'LineSprite',
                                value: 1732
                            },
                            {
                                name: 'RectSprite',
                                value: 3623
                            }
                        ]
                    },
                ]
            };
            this.data = data;
            console.log(this.data);
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                series: [{
                    type: 'tree',
                    id: 0,
                    name: 'tree1',
                    data: [data],
                    top: '10%',
                    left: '8%',
                    bottom: '22%',
                    right: '20%',
                    symbolSize: 7,
                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 3,
                    lineStyle: {
                        width: 2
                    },
                    label: {
                        backgroundColor: '#fff',
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }]
            });

            //   console.log(this.data);
            // console.log(this.series.data);
            let that = this;
            myChart.on('click', function (params) {
                that.now = params
                //    console.log(that.val);
                //    this.now.treeAncestors.push({name:that.val})
                console.log(that.now.data.src);
                if (that.now.data.src != undefined) {
                    console.log(111);
                }
                if (that.now.data.name == '新建文件') {
                    console.log(1);
                    that.open()
                }
            })
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                series: [{
                    type: 'tree',
                    id: 0,
                    name: 'tree1',
                    data: [data],
                    top: '10%',
                    left: '8%',
                    bottom: '22%',
                    right: '20%',
                    symbolSize: 7,
                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 3,
                    lineStyle: {
                        width: 2
                    },
                    label: {
                        backgroundColor: '#fff',
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
                    emphasis: {
                        focus: 'descendant'
                    },
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }]
            });
            this.myChart = myChart;
        },
    }
    }
</script>

<style>

</style>