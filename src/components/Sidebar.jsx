import { Sugestoes } from "./sugestoesComponents/Sugestoes"
import { Usuario } from "./Usuario"
import userObj from "../userDB/usuarioDB"

const Sidebar = () => {
    return (
        <div class="sidebar">
            <Usuario 
            nome = {userObj.nome}
            imagem = {userObj.imagem}
            alt = {userObj.alt}        
            />
            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

export {Sidebar}