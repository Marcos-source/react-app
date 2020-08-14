import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Dates from './dates.js';
import Chart from './highcharts.js';

const paddR ={
  paddingRight:"20px"
}
const paddL ={
  paddingLeft:"20px"
}

const paddT ={
  paddingTop:"20px"
}

export default function Rutas() {

  const initialState = {
    min: "0000-00-00",
    max: "0000-00-00",
  };

  const [fecha, setFecha] = useState(initialState);

  const [datos, setDatos] = useState([]);

  const [category, setCategory] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.post("https://adan-proyect.herokuapp.com/rutas",{
            min: fecha.min,
            max: fecha.max
          })
            .then(r=>{
              var cant = r.data;
              var showCant = [];
              var showCategory = [];
              cant.map(c=>{
                showCategory.push(c.Fecha)
                showCant.push(c.Cantidad)
              })
              setCategory(showCategory)
              setDatos(showCant)
            })
            .catch(e=>{
              console.log(e);
            })
      };
      fetchData();
    },[fecha]);

  const updateField = (e) => {
  setFecha({
    ...fecha,
    [e.target.name]: e.target.value,
  })
};
    return (
      <div class="bg bg-dark">
        <div className="App-header">
          <Dates
            fecha={fecha}
            updateField={updateField}
          />
          <div class="d-flex justify-content-center">
            <div style={paddR}>
              <Link to={{pathname: `/rutas`}}><button Class="btn btn-success">Rutas</button></Link>
            </div>
            <div style={paddL}>
              <Link to={{pathname: `/visitas`}}><button Class="btn btn-success">Visitas</button></Link>
            </div>
          </div>
          <Chart
            datos={datos}
            cantidad={category}
          />
          <div style={paddT}>
            <Link to={{pathname: `/`}}><button Class="btn btn-success">Inicio</button></Link>
          </div>
        </div>
      </div>
    );
}
