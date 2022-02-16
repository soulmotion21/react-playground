import { ECBasicOption } from 'echarts/types/dist/shared'

interface SeriesType {
  data: any[]
  type: string
  label: {
    show: boolean
    position?: string
    rotate?: number
    fontSize?: number
  }
  stack?: string
}

const getSeries = (
  data: Array<any>,
  chartType: string,
  stack?: string | undefined
): SeriesType[] => {
  const newSeries = data.map(d => {
    return {
      data: [d],
      type: chartType,
      label: {
        show: true,
        position: 'inside',
        rotate: 90,
        fontSize: 10,
      },
      stack: stack ? '1' : '',
    }
  })
  return newSeries
}

const getBasicOption = (categories, series): ECBasicOption => {
  return {
    grid: {
      top: '10%',
      left: '0',
      right: '0',
      bottom: '7%',
      containLabel: false,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none',
      },
    },
    xAxis: {
      type: 'category',
      data: categories,
      show: false,
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: series,
  }
}

export { getSeries, getBasicOption }
