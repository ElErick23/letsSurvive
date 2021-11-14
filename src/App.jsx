import logo from './logo.svg';
import Clock from './Clock'
import icons from './icons'
import Searchbox from './Searchbox'
import { Routes, Route, Link } from "react-router-dom";
import Rutas from './Routes'


import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <div className="Reloj">
        <Clock />
        </div>
        <div className="divisor"></div>
        <div className="Clima"><ul>
          <li>El clima va aquí</li>
          <li>La fecha va aquí</li>
          <li>27°nte, 36°est</li>
          </ul></div>
          <div className="nuclear">
            <ul className="nuclear">
              <li>8msv/h</li>
              <li>1000HPA</li>
            </ul>
          </div>
      </header> 
      <body>
      <h1><u>Bienvenido Al</u> Fin del Mundo</h1>
      <div className="guideMenu">
      <img className="Iconos" src={icons.guia}/>
      <Searchbox placeholder="Sobrevive" handleChange={(e)=> console.log(e)}/>
      {/* Aquí hay que pasarle algo pa'buscar */}
      </div>
      <div className="QuickMenu">
        <div className="Quick">
          <div Route className="card">
          <Link to="/Refugio">
              <img src={icons.refugio}/>
              <span className="caption">Refugio</span>
           </Link> 
          </div>
          <div className="card"><img src={icons.herramientas}/><span className="caption">Herramientas</span></div>
        </div>
        <div className="QuickMenu">
          <div className="card"><img src={icons.pescao}/><span className="caption">Alimento</span></div>
          <div className="card"><img src={icons.medikit}/><span className="caption">Salud</span></div>
        </div>

      </div>
      </body>
    </div>
    
  );
}

export default App;
