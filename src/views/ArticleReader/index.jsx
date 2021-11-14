import react, { useEffect, useState, useReducer } from 'react';
import { useLocation } from "react-router-dom";
import Gun from 'gun';
import Searchbox from 'Components/Searchbox';
import './article.css';

const gun = Gun({
    peers: [
        'http://localhost:3030/gun'
    ]
})

const initialState = {
    articles: []
}

function reducer(state, article) {
    return {
        articles: [article, ...state.articles]
    }
}



const notFound = {
    name: 'Articulo no encontrado',
    content: 'No existe ningún articulo en esta dirección D:'
}

export default function ArticleReader() {
    var id = useLocation().pathname.substring(1);
    const [article, setArticle] = useState(notFound);

    useEffect(() => {
        gun.get('articles').get(id).once(node => {
            if (node)
                setArticle(node);
        });
    }, []);

    return (
        <div>
            <header>
                
                <Searchbox />
            </header>
            <h2>{article.name}</h2>
            <div className='content' dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </div>
    );
}