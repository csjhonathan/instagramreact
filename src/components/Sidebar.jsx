import { Sugestoes } from "./sugestoesComponents/Sugestoes"
import { Usuario } from "./Usuario"
import userObj from "../userDB/usuarioDB"
import { useState } from "react"

const Sidebar = () => {
    const [name, setName] = useState(userObj.nome);
    const [image, setImage] = useState (userObj.imagem);

    const handleName = () => {
        const userName = prompt('Que nome deseja usar?');
        setName(userName ? userName : name)
    }

    const handelImage = () => {
        const userImage = prompt('Cole aqui o link da imagem que deseja usar:');
        setImage(userImage ? userImage : image)
    }

    return (
        <div class="sidebar">
            <Usuario 
            alt = {userObj.alt}
            name = {name}
            handleName = {handleName}
            image = {image}
            handelImage = {handelImage}        
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