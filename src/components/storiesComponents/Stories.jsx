import Story from "./Story";
import storiesItemList from "../../userDB/storiesDB";
const Stories = () => {
    return (

        <div class="stories">
            {storiesItemList.map((story, index)=> (
                <Story
                    key = {index}
                    nome={story.nome}
                    imagem={story.imagem}
                />))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

export { Stories }