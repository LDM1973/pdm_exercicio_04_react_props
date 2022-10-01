import React from 'react'
import Comentario from './Comentario'
import Cartao from './Cartao'
import Feedback from './Feedback'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const ListaComentarios = () => {
    
    const textoOK = 'Sim'
    const textoNOK = 'Não'

    const componenteFeedback = (
        <Feedback 
            textoOK={textoOK}
            textoNOK={textoNOK}
        />
    )
    
    return(
        <div className="container border rounded mt-3">
            <div className="row border-bottom mt-2">
                <h1 className="display-5 text-center">Análises dos Usuários</h1>
            </div>

            {/* Comentario 1 */}
            <div className="col-12 mt-2">
                <Cartao>
                    <Comentario
                    avatar="bi bi-person-circle display-5"
                    nome="Junin_123" 
                    comentario="Muito bom este jogo, recomendo a todos."
                    horario="06/05/21 09:00"
                    />
                    {componenteFeedback}
                </Cartao>
            </div>

            {/* Comentario 2 */}
            <div className="col-12 mt-2">
                <Cartao>
                    <Comentario
                    avatar="bi bi-person-circle display-5"
                    nome="ExtremeGamer_123"
                    comentario="esse é o pior jogo que ja joguei na minha vida!!! NÃO COMPREEMMMM!!!"
                    horario="12/08/21 12:39"
                    />
                    {componenteFeedback}
                </Cartao>
            </div>

            {/* Comentario 3 */}
            <div className="col-12 mt-2">
                <Cartao>
                    <Comentario
                    avatar="bi bi-person-circle display-5"
                    nome="Xx_K1ll3rStr34k_xX" 
                    comentario="Jogo bom mas precisa de muita coisa pra melhorar"
                    horario="02/09/21 17:02"
                    />
                    {componenteFeedback}
                </Cartao>
            </div>

        </div>
    )
}

export default ListaComentarios