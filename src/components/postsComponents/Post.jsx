import { useState } from "react";

const Post = ({author, profileImg, postImg, hihglightLike, hihglightLikeImg, likesQuantt}) => {

    const [heart, setHeart] = useState("heart-outline");
    const [bookmark, setBookmark] = useState("bookmark-outline")
    
    const handleLike = () =>{
        heart === "heart-sharp" ? setHeart("heart-outline") : setHeart("heart-sharp");
    }

    const handleBookmark = () =>{
        bookmark === "bookmark" ? setBookmark("bookmark-outline") : setBookmark("bookmark");
    }
    
    return (
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={profileImg} alt={author}/>
                        {author}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={postImg} alt={postImg} onDoubleClick = {handleLike}/>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name={heart} class = {heart} onClick = {handleLike}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={bookmark} onClick={handleBookmark}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={hihglightLikeImg} alt={hihglightLike} />
                        <div class="texto">
                            Curtido por <strong>{hihglightLike}</strong> e <strong>outras {likesQuantt} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Post;