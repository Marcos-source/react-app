import React, {useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const padd ={
  paddingTop:"20px"
}
export default function Charts(props) {
  const options = {
    chart: {
        type: 'bar'
    },
    title: {
      text: 'Medidor'
    },
    yAxis: {
      title: {
          text: 'Lectura'
      }
    },
    series: [
      {
        data: props.cantidad
      }
    ]
  };
    return (
      <div>
        <div style={padd}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
      </div>
    );
}
