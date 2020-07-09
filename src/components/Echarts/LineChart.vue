<template>
  <div style="width:100%; height:100%"></div>
</template>

<script>
import echarts from 'echarts' // 引入组件
import '@/../node_modules/echarts/lib/chart/line'
import China from '@/api/popularity/China.json'
import America from '@/api/popularity/America.json'
import English from '@/api/popularity/English.json'
import Japan from '@/api/popularity/Japan.json'
import Korea from '@/api/popularity/Korea.json'
let _ = require('lodash')

export default {
  name: 'LineChart',
  data () {
    return {
      chart: null,
      se: [],
      nameo: [],
      da: [],
      countryName: '中国'
    }
  },
  mounted () {
    this.initChart()
    this.change(this.countryName)
    // this.$EventBus.$on("getCountry",(val) => {
    //   this.countryName = val;
    // })
  },
  watch: {
    countryName(val){
      console.log(val + '1')
      //this.currentCountry = val
      this.change(val)
    }
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el)
      this.chart.resize()
    },
    change (country) {
      this.nameo = []
      this.se = []
      this.da = []
      var coun
      if (country === '中国') {
        coun = China
      } else if (country === '美国') {
        coun = America
      } else if (country === '英国') {
        coun = English
      } else if (country === '日本') {
        coun = Japan
      } else if (country === '韩国') {
        coun = Korea
      }
      var beginDt = new Date('2019-11-20')
      var na = coun.nameofmovie
      var rat = coun.rating
      na.forEach((item, index) => {
        this.nameo.push(na)
        var seri = {
          name: '',
          type: 'line',
          data: []}
        seri.name = item
        seri.data = rat[index]
        this.se.push(seri)
      })
      for (var i = 0; i < coun.rating[0].length; i++) {
        var d = beginDt.getFullYear() + '-' + (beginDt.getMonth() + 1) + '-' + beginDt.getDate()
        this.da.push(d)
        beginDt.setDate(beginDt.getDate() + 1)
      }
      var option = {
      // 标题
        title: {
          text: 'TMDB部分'+ this.countryName + '剧集热度',
          left: 15,
        },
        tooltip: {
          trigger: 'axis',
          // 当鼠标移动到数值时候，在X轴Y轴显示数值
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderColor: '#0F8C79',
          borderWidth: 3,
          textStyle: {
            color: '#000000'
          },
          axisPointer: {
            type: 'line'
          },
          triggerOn: 'mousemove',
          enterable: true,
          formatter: (params) => {
            const newParams = [];
            let paramsData = _.sortBy(params, 'value');
            paramsData = _.reverse(paramsData);
            paramsData.forEach((p) => {
              const cont = p.marker + ' ' +p.seriesName + ': ' + p.value + '<br/>';
              newParams.push(cont);
            });
            return _.join(newParams, '');
          }
        },
        grid: {
            left: '5%'
        },
        dataZoom: [// 控制缩放
          {
            type: 'slider',
            xAxisIndex: 0,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            xAxisIndex: 0,
            start: 0,
            end: 100
          },
          {
            type: 'slider',
            yAxisIndex: 0,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            yAxisIndex: 0,
            start: 0,
            end: 100
          }
        ],
        // 工具箱
        // 保存图片
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            }
          }
        },
        // 图例-每一条数据的名字
        legend: {
          show: false,
          data: this.nameo
        },
        // x轴
        xAxis: {
          name: '时间',
          data: this.da
        },
        // y轴没有显式设置，根据值自动生成y轴
        yAxis: {
          name: '热度'
        },
        // 数据-data是最终要显示的数据
        series: this.se,
      }
      this.chart.clear()
      this.chart.setOption(option)
        // this.chart.on('click', (params) => {
        //     console.log(params)
        //     this.$router.push('/tv/' + params.seriesName)
        // })
    }
  }

}
</script>
