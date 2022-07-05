import { useState } from "react";
import { BsHeartFill,BsHeart,BsPersonFill } from "react-icons/bs";
import Food from '../images/postImage.jpg'

const Post = () => {
    const [like,setLike] = useState(false)
    return(
        <div className="p-5 rounded-2xl bg-stone-50 h-1/2 grid gap-y-5">
                <div className="flex items-center h-10 gap-x-4">
                  <BsPersonFill className="text-4xl rounded-full bg-stone-500 p-2"/>
                  <h3 className="font-bold text-lg">Utkarsh Shukla</h3>
                  <p className="text-sm">5 min ago</p>
                </div>

                <div className="h-72 rounded-2xl overflow-hidden">
                    <img src={Food} alt="food item" className="object-cover" />
                </div>
                <div className="flex items-center gap-x-2">
                    {
                        like? <BsHeartFill className="text-2xl text-red-600" onClick={()=>setLike(false)}/>
                        :<BsHeart className="text-2xl" onClick={()=>setLike(true)}/>
                    }
                   {
                    like?<h3 className="text-md text-stone-900">Utkarsh likes this</h3>
                    :<h3 className="text-md text-stone-900">No likes yet</h3>
                   }
                    
                </div>
                <div className="p-2">
                <p classname="text-sm text-stone-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam. Maiores impedit possimus voluptatem rerum.</p>
                </div>
            </div>
    )
}
export default Post;