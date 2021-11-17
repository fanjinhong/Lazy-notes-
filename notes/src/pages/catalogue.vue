<template>
    <div id="catelogue">
        <div id="myChart" :style="{width: '500px', height: '800px'}"></div>
        <div class="abc">
            <div @click="add()">点我</div>
            <input type="text" v-model="val">
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
                val:'',
                now:'',
                data: ''
            }
        },
        methods: {
            add() {
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                this.data.children.push({name:this.val})
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
                            }]
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
                    if(that.now.data.src !=  undefined) {
                        console.log(111);
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
                    // 一定要说我们在那边也有一个场所
                    // 场地，设备设施、 训练，参加大赛拿奖孵化基地都提供过帮助
                    // 创业，钱，保洁等等都需要钱都是 酒店式的拎包入住 ，不用担心等等问题 提供了一个很舒服的创业环境 
                    // 疫情不需要隔离 提供了一个非常舒服的场所
                    // 重点奖项：通过这个打开知名度，获得更多接单的机会，通过业务上的增大，人数越来越大，逐渐的成立一个更加大的团队，说出来营业额等
                    // 说数据， 租金，离学校进等等
                    // 活动，讲座等等 创业涉及到很多方面，-》 什么活动，获得了什么收获 10月29号
        }
    }
</script>

<style>

</style>