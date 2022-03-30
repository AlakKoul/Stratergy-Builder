import React from 'react'
import makeplot from "./plots"
import Chart from 'react-google-charts'

export const Plot = (props) => {
    let scatterData = [
        ['Price', 'Profit'],
      ]
      
      var {coordinates} = props.coordinates;
      console.log(coordinates);
      // var coordinates = {
      //   xCoord : [20,30],
      //   yCoord : [30,50]
      // }
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
