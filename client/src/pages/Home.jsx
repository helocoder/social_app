import Feed from "../components/Feed";
import FriendList from "../components/FriendList";
import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout>
            <Feed/>
            <FriendList/>
        </Layout>
    )
}

export default Home;