import React from 'react'
import {Line} from 'react-chartjs-2'

function Chart({dataArr,dateArr,type,Color}) {
// console.log("Income arr",incomeArr);
// console.log("Date Array = ",dateArr);

const data = {
  labels: dateArr,  
  datasets: [{
    label: type,
    data: dataArr,
    fill: true,    
    backgroundColor: "rgba(75,192,192,0.2)",
    borderColor: Color,
    tension: 0.1
  },  
]
};
    return (
        <div>
            
            <Line data={data}/>
        </div>
    )
}

export default Chart
