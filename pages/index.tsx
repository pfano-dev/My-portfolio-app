import React from 'react'
import { services } from '@/data'
import { GetServerSidePropsContext } from 'next'



function index() {

  return (
    <div>
      <h5>
        I'm junior software engineer at Zensar. I have 2+ years working experience in software development.
        I am a hardworking person, passionate and committed with the ability to work under pressure. 
        I have good interpersonal skills which gives me an edge in dealing with the public. 
        My motto is always give it your all so you will never fall behind.
        Im an open minded and patient person that believes life is full of challenges and opportunities 
      </h5>
      <div>
        <h6>What I Offer</h6>
        <div>
          {
            // services.map(service=><Servicecard service={service}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default index

