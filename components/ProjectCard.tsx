import { IProject } from '@/type'
import React, { useState } from 'react'
import { FunctionComponent } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import Image from 'next/image'

const ProjectCard:FunctionComponent<{project:IProject}>=({project:{name,description,image_path,deployed_url,github_url,
  category,
  key_techs}})=> {
    const [showDetail, setShowDetail] = useState(false)
  return (
    <div>
      <Image src={image_path} alt={name} className='cursor-pointer' onClick={()=>setShowDetail(true)} width="300" height="150" layout="responsive"/>
      <p className='my-2 text-center'>{name}</p>

{
  showDetail && (

<div className="absolute left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-200 top-10 md:grid-cols-2 gap-x-12">

      <div className='p-3 '>
        
        <Image src={image_path} alt={name} width="500" height="150" layout="responsive"/>

        <div className='flex justify-center my-4 space-x-3 className="flex items-center px-4 py-2 text-lg bg-gray-200"'>
          <a href={github_url} className="flex items-center px-4 py-2 text-lg bg-gray-200">
            <AiFillGithub/><span>Github</span>
          </a>
          <a href={deployed_url} className="flex items-center px-4 py-2 text-lg bg-gray-200">
            <AiFillProject/> <span>Project</span>
          </a>
        </div>

      </div>

      <div>
        <h2 className='mb-3 text-xl font-medium md:text-2xl'>{name}</h2>
        <h3 className='mb-3 font-medium'>{description}</h3>
        <div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>{
          key_techs.map((tech)=>(
            <span className='px-2 py-1 my-1 bg-gray-200' key={tech}>{tech}</span>
          ))
          }</div>
      </div>

      <button className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none' onClick={()=>setShowDetail(false)}>
        <MdClose size={30}/>
      </button>

</div>
      

  )
}

    </div>
  )
}

export default ProjectCard