import React from 'react'
import ReactDOM from 'react-dom'
import ListaComentarios from './ListaComentarios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const App = () => {
    return(
        <ListaComentarios />
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)