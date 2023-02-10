import { useState } from "react";

const Post = ({author, profileImg, postImg, hihglightLike, hihglightLikeImg, likesQuantt}) => {
    const [likes, setLikes] = useState(Number(likesQuantt.replaceAll(".", "")))
    const [heart, setHeart] = useState("heart-outline");
    const [bookmark, setBookmark] = useState("bookmark-outline");
    const [like, setLike] = useState("likeHeartOcute")
    
    const handleLike = () =>{
        if(heart === "heart-sharp"){
            setHeart("heart-outline")
            setLikes(likes-1)
        } else {
            setHeart("heart-sharp")
            setLikes(likes+1)
        }
    }

    const handleLikeDblClick = () =>{
        if(heart !== "heart-sharp"){
            handleLike();
        }
        setLike("likeHeart")
        setTimeout(()=> {
            setLike("likeHeartOcute")
        }, 1000)
    }

    const handleBookmark = () =>{
        bookmark === "bookmark" ? setBookmark("bookmark-outline") : setBookmark("bookmark");
    }

    return (
        <div class="post" data-test="post">
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
                    <img src={postImg} alt={postImg} onDoubleClick = {handleLikeDblClick} data-test="post-image"/>
                    <ion-icon name="heart" class = {like} ></ion-icon>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name={heart} class = {heart} onClick = {handleLike} data-test="like-post"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={bookmark} onClick={handleBookmark} data-test="save-post"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={hihglightLikeImg} alt={hihglightLike} />
                        <div class="texto">
                            Curtido por <strong>{hihglightLike}</strong> e <strong data-test="likes-number">outras {likes} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Post;