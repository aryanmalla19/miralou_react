import React from 'react'
import back from "../assets/h.png"
import "../components/container.css"
export default function Conatiner() {
  return (
    <div className='mb-32'>
      <img className='h-full' src={back} />
      <div className='wow flex-col flex container mx-auto flex-start justify-start'>
        <div className='text-5xl font-bold w-1/2'>Scandinavian
          Supremacy</div>
        <div className='text-2xl pt-4 pb-4 w-1/2 font-medium'>At miralou we have turned traditional skin care
          ingredients lists on its head</div>
        <div>
          <button className='w-1/6 pt-2 pb-2 text-2x font-medium bg-yellow-300'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
