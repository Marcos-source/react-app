import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const padd ={
  paddingBottom:"20px"
}
const paddR ={
  paddingRight:"20px"
}
export default function Dates(props) {
    return (
      <div style={padd}>
          <div class ="d-flex justify-content-between">
            <label style={paddR}> Medidor </label>
              <input
                type="number"
                name="serie"
                value={props.medidor.serie}
                onChange={(e)=>props.updateField(e)}
                className="form-control"
              ></input>
          </div>
        </div>
    );
}
