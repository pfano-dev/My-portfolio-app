import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from "react-icons/ai"
import {GrLocation} from "react-icons/gr"
import {GiTie} from 'react-icons/gi'
import profile from "../assets/images/about.jpg"

  
function Sidebar() {
  return (
    <div>
      <img  src="https://media.licdn.com/dms/image/C5603AQHpJLSC9ePyRw/profile-displayphoto-shrink_800_800/0/1558249160107?e=1687392000&v=beta&t=pHEF1QBF4qaOol75IXZ9MljG20u0gc_xvpGSr9yUVtA" 
      alt="profile"
      className='w-32 h-32 mx-auto rounded-full'
      />
      <h3 className='my-4 text-3xl font-medium tracking-wide font-Kaushan'>
        <span className='text-green '>Muleya </span>
        <span className='text-cyan-600'> Pfano </span>
       
      </h3>
      <p className='px-2 py-2 my-3 bg-gray-200 rounded-full'>Software Engineer</p>
      <a  download={""} 
      className='flex items-center justify-center px-2 py-2 bg-gray-200 rounded-full'>
      <GiTie className="w-6 h-6"/>Download Resume
      </a>
     
      <div className="flex justify-around w-9/12 mx-auto my-5 text-cyan-600 md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8"/>
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8"/>
        </a>
        <a href="">
          <AiOutlineInstagram className="w-8 h-8"/>
        </a>
      </div>
      <div className="py-4 my-5 bg-gray-200"
       style={{marginLeft:"-1rem", marginRight:"-1rem"}}>
        <div className='flex items-center justify-center'>
          <GrLocation/>
          <span className='ml-2'>Johannesburg, Gauteng</span>
        </div>
        <p className='my-2'>muleyapfano12345@gmail.com</p>
        <p className='my-2'>0796495495</p>
      </div>
      <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none'
      onClick={()=>window.open("mailto:muleyapfano12345@gmail.com")}
      >Email Me</button>
      <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'>Toggle Theme</button>
    </div>
  )
}

export default Sidebar
