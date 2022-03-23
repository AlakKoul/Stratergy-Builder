import React from 'react'
import coordinates from "./plots.json"
import Chart from 'react-google-charts'

export const Plot = () => {
    let scatterData = [
        ['Price', 'Profit'],
      ]
    
      for(let i in coordinates.xCoord){
        scatterData.push([coordinates.xCoord[i], coordinates.yCoord[i]]);
      }
      let scatterOptions = {
        title: 'Price of Underlying vs. Profit',
        hAxis: { title: 'Price', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Profit', minValue: 0, maxValue: 15 },
        legend: 'none'
      }
  return (
    <div>
        <h2>React Scatter Chart Example</h2>
        <Chart
          width={'700px'}
          height={'420px'}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={scatterData}
          options={scatterOptions}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
  )
}
