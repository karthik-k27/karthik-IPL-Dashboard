/*
import {
  Pie,
  PieChart,
  PieLabelRenderProps,
  PieSectorShapeProps,
  Sector,
  useActiveTooltipDataPoints,
  useIsTooltipActive,
} from 'recharts'
import {RechartsDevtools} from '@recharts/devtools'

// #region Sample data
/*
const data = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200},
]
*/
/*
// #endregion
const RADIAN = Math.PI / 180
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const renderCustomizedLabel = () => {
  const {cx, cy, midAngle, innerRadius, outerRadius, percent} =
    PieLabelRenderProps

  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const ncx = Number(cx)
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN)
  const ncy = Number(cy)
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  )
}

const MyCustomPie = () => {
  const {props} = PieSectorShapeProps
  const p = useActiveTooltipDataPoints()
  const isAnyPieActive = useIsTooltipActive()
  const isThisPieActive = isAnyPieActive && props.payload === p?.[0]
  let fillOpacity
  if (isAnyPieActive && !isThisPieActive) {
    fillOpacity = 0.5
  } else {
    fillOpacity = 1
  }
  return (
    <Sector
      {...props}
      fill={COLORS[props.index % COLORS.length]}
      stroke="none"
      fillOpacity={fillOpacity}
      style={{transition: 'fill-opacity 0.3s ease'}}
    />
  )
}

const MatchStats = props => {
  const isAnimationActive = false
  const {recentMatches} = props
  const winCount = recentMatches.filter(each=> each.matchStatus==="Won").length
  const lostCount = recentMatches.filter(each=> each.matchStatus==="Lost").length
  const drawCount = recentMatches.filter(each=> each.matchStatus!=="Won" && each.matchStatus==="Lost").length

  const data = [
    {name: 'Won', value: winCount},
    {name: 'Lost', value: lostCount},
    {name: 'Drawn', value: drawCount},
  ]


  return (
    <PieChart
      style={{
        width: '100%',
        maxWidth: '500px',
        maxHeight: '80vh',
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        labelLine={false}
        label={renderCustomizedLabel}
        dataKey="value"
        isAnimationActive={isAnimationActive}
        shape={MyCustomPie}
      />
      <RechartsDevtools />
    </PieChart>
  )
}
export default MatchStats
*/

import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const MatchStats = props => {
  const {recentMatches} = props
  const winCount = recentMatches.filter(each => each.matchStatus === 'Won')
  const lostCount = recentMatches.filter(each => each.matchStatus === 'Lost')
  const drawCount = recentMatches.filter(
    each => each.matchStatus !== 'Won' && each.matchStatus !== 'Lost',
  )

  const data = [
    {name: 'Won', value: winCount.length},
    {name: 'Lost', value: lostCount.length},
    {name: 'Drawn', value: drawCount.length},
  ]

  const matchPieChart = () => (
    <PieChart width={1000} height={300}>
      <Pie
        cx="50%"
        cy="50%"
        data={data}
        startAngle={0}
        endAngle={360}
        innerRadius="0%"
        outerRadius="100%"
        dataKey="value"
      >
        <Cell
          name={`Won: ${data.find(each => each.name === 'Won').value} matches`}
          fill="#5a8dee"
        />
        <Cell
          name={`Lost: ${
            data.find(each => each.name === 'Lost').value
          } matches`}
          fill="#a3df9f"
        />
        <Cell
          name={`Drawn: ${
            data.find(each => each.name === 'Drawn').value
          } matches`}
          fill="#64c2a6"
        />
      </Pie>
      <Legend
        iconType="circle"
        layout="horizontal"
        verticalAlign="bottom"
        align="center"
      />
    </PieChart>
  )

  return (
    <div className="match-chart-container">
      <h1 className="match-chart-title">Match statistics</h1>
      {matchPieChart()}
    </div>
  )
}

export default MatchStats
