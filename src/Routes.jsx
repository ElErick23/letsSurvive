import React from 'react'
import {Routes, Route} from "react-router-dom";
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
            <Route path ="herramientas" element={<Herramientas/>}/>
            <Route path ="salud" element={<Salud/>}/>
            <Route path ="alimentos" element = {<Alimentos/>}/>
            <Route path ="/refugio" element = {<Refugio/>}/>
        </Routes>
        </div>
    )
}



export default Rutas