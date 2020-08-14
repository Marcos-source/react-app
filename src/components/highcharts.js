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
        type: 'spline'
    },
    title: {
      text: 'Rutas'
    },
    xAxis: {
      categories: props.cantidad
    },
    yAxis: {
      title: {
          text: 'Cantidad'
      }
    },
    series: [
      {
        data: props.datos
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
