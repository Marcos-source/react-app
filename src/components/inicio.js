import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Dates from './dates.js';
import Chart from './highcharts.js';
import io from 'socket.io-client';
// var socket = io.connect('http://localhost:8080', { 'forceNew': true });
const paddR ={
  paddingRight:"20px"
}
const paddL ={
  paddingLeft:"20px"
}

export default function Inicio() {
    return (
      <div class="bg bg-dark">
        <div className="App-header">
          <div class="d-flex justify-content-center">
            <div style={paddR}>
              <Link to={{pathname: `/rutas`}}><button Class="btn btn-success">Rutas</button></Link>
            </div>
            <div style={paddL}>
              <Link to={{pathname: `/visitas`}}><button Class="btn btn-success">Visitas</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
}
