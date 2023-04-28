import ProjectCard from '@/components/ProjectCard'
import ProjectNavBar from '@/components/ProjectNavBar'
import { projects as projectsData } from '@/data'
import { category } from '@/type';
import React, { useState } from 'react'

function project() {

const [projects, setProjects] = useState(projectsData);
const [active, setActive] = useState("all")

const handlerFliterCategory = (category:category | "all")=>{
    if(category==='all'){
      setProjects(projectsData);
      setActive(category);
      return
    }
  
   const newArray = projectsData.filter((project)=>(project.category.includes(category)));
   setProjects(newArray);
   setActive(category)

}


  return (
    <div className='px-5 py-2 overflow-y-scroll' style={{height:"65vh"}}>
     <ProjectNavBar handlerFliterCategory={handlerFliterCategory} active={active}/>

     <div className='relative grid grid-cols-12 gap-4 my-3'>
      {
        projects.map((project)=>(
          <div className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4'>
               <ProjectCard project={project} key={project.name}/>
          </div>
         
        ))
      }
     </div>

    </div>
  )
}

export default project
