import { Stories } from "./storiesComponents/Stories"
import { Posts } from "./postsComponents/Posts"
import { Sidebar } from "./Sidebar.jsx"
const Corpo = () => {
    return (

        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>

            <Sidebar />
        </div>
    )
}

export { Corpo }