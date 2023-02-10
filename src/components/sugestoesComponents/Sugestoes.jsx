import {Sugestao} from "./Sugestao.jsx"
import suggestionsList from "../../userDB/sugestoesDB.js"

const Sugestoes = () => {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestionsList.map((sugestao, index) => 
                <Sugestao 
                key={index}
                nome = {sugestao.nome}
                imagem = {sugestao.imagem}
                estado = {sugestao.estado}
                />
            )}
        </div>
    )
}

export {Sugestoes}