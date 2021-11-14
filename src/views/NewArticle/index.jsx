import react, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Gun from 'gun';
import './new.css';

const gun = Gun({
    peers: [
        'http://localhost:3030/gun'
    ]
})

String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}

function isReady(form) {
    return form.name && form.content;
}

export default function NewArticle() {
    const [form, setForm] = useState({});
    const [ready, setReady] = useState(isReady(form));

    function click() {
        if (ready) {
            var path = `${form.name}${form.content}`.hashCode();
            const article = gun.get('articles').get(path);
            article.put({
                name: form.name,
                content: form.content,
            });
            window.location.href = `${window.location.origin}/${path}`;
        }
    }

    function saveForm(e) {
        var newForm = form;
        newForm[e.target.id] = e.target.value;
        setReady(isReady(form));
        setForm(newForm);
    }

    return (
        <div>
            <h2>¡Crea un nuevo artículo y compártelo con el mundo!</h2>
            <div className="table-cont">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <span>Título de tu artículo</span>
                            </td>
                            <td>
                                <input id="name" placeholder='Título' onChange={saveForm}/>
                            </td>
                        </tr>
                        <tr className="">
                            <td>
                                <span>Contenido del artículo</span>
                            </td>
                            <td>
                                <textarea id="content" placeholder='Contenido' onChange={saveForm}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button disabled={!ready} onClick={click}>Crear</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
