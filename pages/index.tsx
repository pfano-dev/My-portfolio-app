import React from 'react'
import { services } from '@/data'
import { GetServerSidePropsContext } from 'next'
import ServiceCard from '@/components/ServiceCard'



function index() {

  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>
      <h5 className='my-3 font-medium'>
        I'm junior software engineer at Zensar. I have 2+ years working experience in software development.
        I am a hardworking person, passionate and committed with the ability to work under pressure. 
        I have good interpersonal skills which gives me an edge in dealing with the public. 
       
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-200' style={{margin:'0 -1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <div className='grid gap-6 lg:grid-cols-2'>
          {
            services.map((service)=>
            (
            <div className='rounded-lg bg-gray-50 lg:col-span-1'>
              <ServiceCard service={service}/>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default index

