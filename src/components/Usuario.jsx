import { useState } from "react"

const Usuario = ({nome, imagem, alt}) => {
    const [name, setName] = useState(nome);
    const [image, setImage] = useState (imagem)

    const handleName = () => {
        const userName = prompt('Que nome deseja usar?');
        setName(userName ? userName : name)
    }
    const handelImage = () => {
        const userImage = prompt('Cole aqui o link da imagem que deseja usar:');
        setImage(userImage ? userImage : image)
    }

    return (
        <div class="usuario">
            <img src={image} alt={alt} onClick = {handelImage} data-test="profile-image"/>
            <div class="texto">
                <span>
                    <strong data-test="name" >{name}</strong>
                    <ion-icon name="pencil" onClick = {handleName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>

    )
}

export {Usuario}