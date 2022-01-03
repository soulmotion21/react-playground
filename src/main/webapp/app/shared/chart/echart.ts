import * as echarts from 'echarts/core'
import {
  BarChart,
  LineChart,
  LinesChart,
  PieChart,
  ScatterChart,
  BoxplotChart,
  RadarChart,
  EffectScatterChart,
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  DataZoomComponent,
  LegendComponent,
  MarkLineComponent,
  ToolboxComponent,
  BrushComponent,
  GraphicComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  PieChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  LineChart,
  LinesChart,
  ScatterChart,
  BoxplotChart,
  RadarChart,
  EffectScatterChart,
  CanvasRenderer,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  LegendComponent,
  MarkLineComponent,
  ToolboxComponent,
  BrushComponent,
  GraphicComponent,
  DatasetComponent,
  TransformComponent,
])

export default echarts
