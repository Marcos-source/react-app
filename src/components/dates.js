import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const padd ={
  paddingBottom:"20px"
}
export default function Dates(props) {
    return (
      <div style={padd}>
          <div class ="d-flex justify-content-between">
            <label>Desde</label>
              <input
                type="date"
                name="min"
                value={props.fecha.min}
                onChange={(e)=>props.updateField(e)}
                className="form-control"
              ></input>
            <label>Hasta</label>
              <input
                type="date"
                name="max"
                value={props.fecha.max}
                onChange={(e)=>props.updateField(e)}
                className="form-control"
              ></input>
          </div>
        </div>
    );
}
