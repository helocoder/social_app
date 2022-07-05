import Layout from "../components/Layout";
import Cover from '../images/cover.jpg';
import UserPhoto from '../images/user.jpg';

const Profile = () => {
    return(
        <Layout>
             <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 m-5">
                <div className="relative">
                    <img src={Cover} alt="Cover photo" className="h-72 w-full object-cover" />
                    <img src={UserPhoto} alt="dp"
                     className="h-32 w-32 rounded-full object-cover absolute
                     left-0 right-0 mx-auto -translate-y-1/2" />
                </div>

                <div className="flex flex-col gap-y-2 text-stone-900">
                    <h1 className="text-3xl  font-bold">Details of User</h1>
                    <h2 className="text-2xl font-semibold ">Utkarsh Shukla</h2>
                    <h3 className="text-xl">Lucknow U.P</h3>
                    <div className="pr-10"> <p className="text-md text-stone-700 block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum esse consectetur neque tenetur harum veniam deleniti voluptatem pariatur facilis eaque?</p></div>
                </div>
             </div>
        </Layout>
    )
}

export default Profile;