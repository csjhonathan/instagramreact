const Usuario = ({alt, name, handleName, image, handelImage}) => {
    
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