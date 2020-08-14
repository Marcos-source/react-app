import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Medidor from './Medidor.js';
import Chart from './highchartsMedidor.js';

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
    serie: undefined,
  };

  const [medidor, setMedidor] = useState(initialState);

  const [category, setCategory] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.post("https://adan-proyect.herokuapp.com/visitas",{
            medidor: medidor.serie
          })
            .then(r=>{
              var cant = r.data;
              var showCategory = [];
              if(cant.index===0){
                setCategory([])
              }else {
                cant.map(c=>{
                    if(c.lectura===null){
                        showCategory.push(0)
                    }else {
                      showCategory.push(c.lectura)
                    }
                })
                setCategory(showCategory)
              }
            })
            .catch(e=>{
              console.log(e);
            })
      };
      fetchData();
    },[medidor]);

  const updateField = (e) => {
  setMedidor({
    ...medidor,
    [e.target.name]: e.target.value,
  })
};
    return (
      <div class="bg bg-dark">
        <div className="App-header">
          <Medidor
            medidor={medidor}
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
            cantidad={category}
          />
          <div style={paddT}>
            <Link to={{pathname: `/`}}><button Class="btn btn-success">Inicio</button></Link>
          </div>
        </div>
      </div>
    );
}
