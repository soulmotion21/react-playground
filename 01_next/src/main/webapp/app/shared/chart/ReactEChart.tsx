/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import * as React from 'react'
import { init, getInstanceByDom } from 'echarts'
import type { CSSProperties } from 'react'
import type { ECharts, SetOptionOpts } from 'echarts'
import { ECBasicOption } from 'echarts/types/dist/shared'

import lightTheme from './theme/light-theme.json'
import darkTheme from './theme/dark-theme.json'

import { useRootState } from 'app/hooks/useRootState'
import { RootState } from 'app/shared/reducers'
import { shallowEqual } from 'react-redux'

export interface ReactEChartsProps {
  option: ECBasicOption
  style?: CSSProperties
  settings?: SetOptionOpts
  loading?: boolean
}

const chartWrap = css`
  width: 100%;
  height: 100%;
`

function ReactEChart({
  option,
  settings,
  loading,
}: ReactEChartsProps): JSX.Element {
  const chartRef = React.useRef<HTMLDivElement>(null)

  const { theme } = useRootState((state: RootState) => {
    return {
      theme: state.auth.theme,
    }
  }, shallowEqual)

  React.useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined

    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme === 'dark' ? darkTheme : lightTheme)
    }

    // ResizeObserver
    function resizeChart() {
      chart?.resize()
    }
    window.addEventListener('resize', resizeChart)

    // Return cleanup function
    return () => {
      chart?.dispose()
      window.removeEventListener('resize', resizeChart)
    }
  }, [theme])

  React.useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current)
      chart.setOption(option, settings)
    }
  }, [option, settings, theme])

  React.useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current)
      loading === true ? chart.showLoading() : chart.hideLoading()
    }
  }, [loading, theme])

  return <div ref={chartRef} css={chartWrap} />
}

export default ReactEChart
