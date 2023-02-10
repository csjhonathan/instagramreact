import postsList from "../../userDB/postDB"
import Post from "./Post"

const Posts = () => {
    return (
        <div class="posts">
            {postsList.map((post, index) => (
                <Post 
                key = {index}
                author = {post.author}
                profileImg = {post.profileImg}
                postImg = {post.postImg}
                hihglightLike = {post.hihglightLike}
                hihglightLikeImg = {post.hihglightLikeImg}
                likesQuantt = {post.likesQuantt}
                />
            ))}
        </div>
    )
}

export {Posts}