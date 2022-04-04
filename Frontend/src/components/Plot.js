import React from 'react'
import makeplot from "./plots"
import Chart from 'react-google-charts'

export const Plot = (props) => {
    let scatterData = [
        ['Price', 'Profit'],
      ]
      
      var coordinates = props.coordinates;
      console.log(props);
      
      if(coordinates.xCoord.length==0){
      var coordinate = {
        xCoord : [20,30],
        yCoord : [30,50]
      }
    }
      console.log("startttt")
  
      for(let i in coordinates.xCoords){
        scatterData.push([coordinates.xCoords[i], coordinates.yCoords[i]]);
      }
      let scatterOptions = {
        title: 'Price of Underlying vs. Profit',
        hAxis: { title: 'Price', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Profit', minValue: 0, maxValue: 15 },
        legend: 'none'
      }
  return (
    <div style={{margin:"50px"}}>
        <h4>React Scatter Chart Example</h4>
        <Chart
          width={'70em'}
          height={'45em'}
          margin={'auto'}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={scatterData}
          options={scatterOptions}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
  )
}
