<template>
  <div id="pie" ref="Userquer"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import {ref,onMounted} from 'vue'
const Userquer = ref<HTMLDivElement>()
onMounted(()=>{
   // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(Userquer.value as HTMLDivElement);

const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

// 绘制图表
myChart.setOption(option);
window.addEventListener('resize',()=>{
    myChart.resize()
})

})
</script>

<style scoped>
#pie{
    width: 90%;
    height: 80%;
}
</style>