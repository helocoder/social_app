import Post from "./Post";

const Feed = () => {
    return(
        <div className="flex flex-col gap-y-10">
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
export default Feed;