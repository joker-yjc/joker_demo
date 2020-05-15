<!--
 * @Date: 2020-05-15 16:56:23
 * @LastEditors: joker_yjc
 * @LastEditTime: 2020-05-15 16:57:20
 * @Desciption:基于echarts的饼状图
--> 
<template>
  <div :id="echartsContainer" ref="pie" style="min-height:400px;"></div>
</template>
<script>
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/dataZoom'
// import * as data from '@/util/walden.json'

export default {
  name: 'echartPie',
  data() {
    return {
      charts: null,
      echartsContainer: 'echartsContainer' + Date.now()
    }
  },
  props: {
    dataSource: {
      type: Array,
      default: function() {
        return [
          {
            value: 335,
            name: '直接访问'
          },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ]
      }
    }
  },
  watch: {
    dataSource() {
      this.reLoad()
    }
  },
  methods: {
    init() {
      this.charts = echarts.init(this.$refs.pie)
      this.setOption()
    },
    setOption(flag = true) {
      let options = {
        color: ['#71CFFF', '#FF9A94', '#FFC077', '#FFA987', '#FFAFFE', '#BBFFC2', '#7B91FF', '#FFE5BF', '#DAA3FF', '#CFFF4D', '#74FF59', '#37F7DB', '#FFFE95'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          // orient: 'vertical',
          icon: 'rect',
          left: '0%'
        },
        series: [
          {
            name: this.$attrs.name,
            type: 'pie',
            radius: '55%',
            center: ['45%', '60%'],
            label: {
              show: true,
              formatter: '{b}: {d}%'
            },
            data: this.dataSource,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      if (flag) {
        this.charts.setOption(options)
      } else {
        this.charts.setOption(options, true)
      }
    },
    reLoad() {
      this.setOption(false)
    },
    resize() {
      this.charts.resize()
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.resize)
    this.$once('hook:beforeDestroy', () => {
      this.charts.dispose()
      window.removeEventListener('resize', this.resize)
    })
  }
}
</script>
