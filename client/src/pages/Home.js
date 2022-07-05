import Feed from "../components/Feed"
import FriendList from "../components/FriendList"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10">
            <Feed/>
            <FriendList/>
        </div>
    </Layout>
  )
}

export default Home