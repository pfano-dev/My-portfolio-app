import { category } from '@/type'
import React, { FunctionComponent } from 'react'



export const NavItem:FunctionComponent<{value:category | 'all', handlerFliterCategory:Function,active:string}> =(
  {value,handlerFliterCategory,active})=> {

  let className = 'capitalize cursor-pointer hover:text-green'
if(active === value){
  className += " text-green";
}
  return (
    
      <li onClick={()=>handlerFliterCategory(value)} className={className}>{value}</li>
    
  )
}


const ProjectNavBar:FunctionComponent<{handlerFliterCategory:Function,active:string}>=(props)=> {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
      <NavItem value='all' {...props}/>
      <NavItem value='react' {...props}/>
      <NavItem value='node' {...props}/>
      <NavItem value='express' {...props}/>
      <NavItem value='django' {...props}/>
      <NavItem value='mongo' {...props}/>
    </div>
  )
}

export default ProjectNavBar