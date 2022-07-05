import Banner from "../components/Banner";
import Feed from "../components/Feed";
import FriendList from "../components/FriendList";
import Layout from "../components/Layout";

const Profile = () => {
    return(
        <Layout>
            <Banner/>
            <div>
                <div className="card">
                    <h2>User Details</h2>
                    <h3>Utkarsh Shukla</h3>
                    <h4>Lucknow, U.P.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corporis eius explicabo incidunt mollitia modi ipsa deserunt exercitationem minus quos?</p>
                </div>
            </div>
        </Layout>
    )
}
export default Profile;