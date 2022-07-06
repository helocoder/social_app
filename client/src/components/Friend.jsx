import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
const Friend = () => {
    const [follow,setFollow] = useState(false);
  return (
    <div className="flex gap-x-5 items-center bg-white rounded-2xl py-3 px-4 my-3 mx-5 ">
            <BsPersonFill className="text-stone-900 text-4xl bg-stone-100 p-1 rounded-full"/>
                <h1 className="text-xl font-bold text-stone-800">
                    Utkarsh Shukla
                </h1>
                <button className="rounded-2xl text-stone-200 px-3 py-2 text-sm bg-stone-800 ml-auto" onClick={()=>setFollow(!follow)}>{follow ? "Unfollow" : "Follow"}</button>
        </div>
  )
}

export default Friend