import React from 'react'
import background from "../assets/h.png"
export default function Conatiner() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    width:"100%",
    height: "460px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div style={myStyle} className='mb-24'>
      <div className='wow flex-col h-full flex w-9/12 mx-auto flex-start justify-center'>
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
