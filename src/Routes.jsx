import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
import App from './App';
import Alimentos from './pages/Alimentos'
import Salud from './pages/Salud'
import Refugio from './pages/Refugio'
import Herramientas from './pages/Herramientas';

function Rutas(){
    return(
        <div>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path ="Herramientas" element={<Herramientas/>}/>
            <Route path ="Salud" element={<Salud/>}/>
            <Route path ="Alimentos" element = {<Alimentos/>}/>
            <Route path ="Refugio" element = {<Refugio/>}/>
        </Routes>
        </div>
    )
}



export default Rutas