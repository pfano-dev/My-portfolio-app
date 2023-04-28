import React from 'react'
import { languages, tools } from '@/data'
import Bar from '@/components/Bar'

function resume() {
  return (
    <div className='px-6 py-2'>

      <div className="grid gap-6 md:grid-cols-2 ">
          <div>
            <h5 className='my-3 text-xl font-bold'>Education</h5>
            <div>
              <h5 className='my-2 text-xl font-bold'>Computer Science</h5>
              <p className='font-semibold'>Univesity of Venda (2016 - 2020)</p>
              <p className='my-3 '>I am currenty pursuing My BSc hounors in computer science</p>
            </div>
          </div>
          <div>
            <h5 className='my-3 text-xl font-bold'>Work Experience</h5>
            <div>
              <h5 className='my-2 text-xl font-bold'>Software Engineer</h5>
              <p className='font-semibold'>MLab (2021 - 2022)</p>
              <p className='my-3 '>I am currenty pursuing My BSc hounors in computer science</p>
            </div>
          </div>


      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <h5 className='my-3 text-2xl font-bold'>
            Langueges and frameworks
          </h5>
          <div className="my-2">
            {
              languages.map((language)=>(
                <Bar data={language} key={language.name}/>
              ))
            }
          </div>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>
            Tools & Softwares
          </h5>
          <div className="my-2">
            {
              tools.map((tool)=>(
                <Bar data={tool} key={tool.name}/>
              ))
            }
          </div>
        </div>

      </div>

    </div>
  )
}

export default resume
