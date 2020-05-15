<!--
 * @Date: 2020-05-15 16:55:03
 * @LastEditors: joker_yjc
 * @LastEditTime: 2020-05-15 16:55:32
 * @Desciption: 基于echarts的折线图
--> 
<template>
  <div :id="echartsContainer" ref="line" style="height:400px;"></div>
</template>
<script>
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/dataZoom'
// import * as theme from '@/util/walden.json'

export default {
  data() {
    return {
      charts: null,
      echartsContainer: 'echartsContainer' + Date.now()
    }
  },
  computed: {
    datas() {
      let arr = []
      this.dataSource.forEach((el) => {
        arr.push({
          name: el.name,
          type: 'line',
          data: el.data,
          symbol: 'circle',
          symbolSize: 6,
          label: {
            show: true
          }
        })
      })
      return arr
    }
  },
  watch: {
    dataSource() {
      this.reload()
    }
  },
  props: {
    // x轴的label
    xData: {
      type: Array,
      default: function() {
        return ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    },
    dataSource: {
      type: Array,
      default: function() {
        return [
          {
            name: '邮件营销',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  },
  methods: {
    setOption(flag = true) {
      let options = {
        color: ['#0090FF', '#55CE62', '#FFCF48', '#CCD0D9', '#FCBF9A', '#D6EBFF', '#48BFEA', '#1ACEB4', '#AC8FF0', '#FFD196', '#F491A5', '#FD6D4C', '#FFC077', '#FF9A94', '#7B91FF'],
        title: {
          text: this.$attrs.titles,
          left: 30,
          top: 20,
          textStyle: {
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          bottom: '4%',
          left: '3%',
          icon: 'rect'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: this.datas[0] && this.datas[0].data.length > 12 ? 40 : 100
          }
        ],
        xAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          type: 'category',
          boundaryGap: false,
          data: this.xData
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#eee'
            }
          },
          type: 'value'
        },
        series: this.datas
      }
      if (flag) {
        this.charts.setOption(options)
      } else {
        this.charts.setOption(options, true)
      }
    },
    init() {
      this.charts = echarts.init(this.$refs.line)
      this.setOption()
    },
    reload() {
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
