import React from 'react'
import { RiHomeSmileFill } from "react-icons/ri";
import { LuMessageSquareText } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import './styles/Tabs.css'; 

export default function Tabs({tab, setTab}) {

  return (
    <div className="z-90 absolute  flex justify-between w-full text-black bottom-0 bg-white left-0 p-5  rounded-2xl items-center">
      <div onClick={()=> setTab("home")} className={`tab-item ${tab === "home" ? "active" : ""} cursor-pointer flex items-center justify-center flex-col `} >
        <RiHomeSmileFill />
        <span>Home</span>
      </div>
      <div onClick={()=> setTab("message")} className={`tab-item ${tab === "message" ? "active" : ""}  cursor-pointer flex items-center justify-center flex-col`}>
        <LuMessageSquareText />
        <span>Messages</span>
      </div>
     <div onClick={()=> setTab("help")} className={`tab-item ${tab === "help" ? "active" : ""}  cursor-pointer flex items-center justify-center flex-col`}>
        <IoMdHelpCircleOutline />
        <span>Help</span>
      </div>
    </div>
  )
}