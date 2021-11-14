import React from 'react'
import {Routes, Route} from "react-router-dom";
import App from './App';
import ArticleReader from 'Views/ArticleReader'
import NewArticle from 'Views/NewArticle'

function Rutas(){
    return(
        <div>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/nuevo-articulo" element={<NewArticle/>}/>
            <Route path ="/*" element = {<ArticleReader/>}/>
        </Routes>
        </div>
    )
}



export default Rutas