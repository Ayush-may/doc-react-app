import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

const Foreground = () => {
  return (
    <>
        <div className="w-full h-screen fixed" >
            <div className="w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white p-5 tracking-wide">
                <FaRegFileAlt />
                <p className="mt-5 text-sm  font-lighter tracking-widest" >Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nam.</p>
            </div>
        </div>
    </>
  )
}

export default Foreground