import { useState } from "react";
import { BsPersonFill,BsHeartFill,BsHeart } from "react-icons/bs";
import PostImage from '../images/post.jpg'

const Post = () => {
    const [like,setLike] = useState(false);
    return(
        <div className="py-5 px-6 flex flex-col gap-y-2 bg-white rounded-2xl drop-shadow-lg">
            <div className="flex gap-x-3 items-center">
            <BsPersonFill className="text-stone-900 text-4xl bg-stone-100 p-1 rounded-full"/>
                <h1 className="text-xl font-bold text-stone-800">
                    Utkarsh Shukla
                </h1>
                <h3 className="text-sm text-stone-800">5 min ago</h3>
            </div>

            <div className="mt-2">
                <img src={PostImage} alt="post photo" 
                className="h-64 w-full object-cover rounded-2xl" />
            </div>

            <div className="mt-2 flex">

                {
                    like ?  <BsHeartFill onClick={()=>setLike(false)} className="text-red-500 text-2xl mx-3 cursor-pointer"/>
                    : <BsHeart onClick={()=>setLike(true)} className="text-red-500 text-2xl mx-3 cursor-pointer"/>
                }
               
               <h4 className="text-md text-stone-800">{like ? "Utkarsh likes this": "No likes yet"}</h4>
            </div>

            <div>
            <p className="text-sm text-stone-700 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia ducimus nobis ad consequatur magni quaerat porro quae aut aperiam.</p>
            </div>
        </div>
    )
}

export default Post