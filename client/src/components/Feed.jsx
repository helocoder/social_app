import AddPost from "./AddPost"
import Post from "./Post"
const Feed = () => {
  return (
    <div className="m-5 grid gap-y-10">
      <AddPost/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed