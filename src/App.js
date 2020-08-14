import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Visitas from './components/visitas.js';
import Ruta from './components/rutas.js';
import Inicio from './components/inicio.js';


function App() {

    return (
      <div class="bg bg-dark">
      <BrowserRouter>
        <Route exact path="/" children={<Inicio />} />
        <Route exact path="/rutas" children={<Ruta />} />
        <Route exact path="/visitas" children={<Visitas />} />
      </BrowserRouter>
      </div>
    );
}

export default App;
