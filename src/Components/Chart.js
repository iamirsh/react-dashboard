import React from 'react';
import CanvasJS from '../Canvasjs.min.js';

const Chart = () =>{
    window.onload = function () {
        var chart = new CanvasJS.Chart("chartContainer",
        {
            title: {
                text: "Order Amount"               
            },
            axisX:{ 
                valueFormatString: "DD-MM-YYYY",
                labelAngle: 180
            },
            axisY: {
              interval: 5000,
              minimum: 0   
          },
          data:[
          {      
            type: "line",
            showInLegend: true,
            name: "Order Amount",
            markerType: "square",
            dataPoints: [
            { x: new Date(2020, 6, 1), y: 20000},       
            { x: new Date(2020, 6, 2), y: 30000}, 
            { x: new Date(2020, 6, 3), y: 21000}, 
            { x: new Date(2020, 6, 4), y: 45000} 
            ]
        }
    ]
    });
    chart.render();
    }
    return(
        <>
        <div id="chartContainer" style={{height:'400px', width: '100%'}}></div>
        </>
    );
};
export default Chart;
 