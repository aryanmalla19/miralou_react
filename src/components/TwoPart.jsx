import React from 'react'
import item from "../assets/items.png"
import imgLast from "../assets/Home (1).png"
export default function TwoPart() {
    return (
        <>
        <div className='w-full flex min-h-40'>
            <div className='w-7/12 bg-violet-500 min-h-40'>
                <div className='flex flex-col justify-center items-center mt-12'>
                <h1 className='font-sans text-3xl w-7/12 text-white'>Get Our Emails For Info On New
                    Items, Sales and More
                </h1>
                <p className='text-lg w-7/12 mt-5 mb-3 text-white'>Subscribe to receive 10% off your next purchase.
                    Plus hear about new arrivals and offers
                </p>
                </div>
                <div className='flex w-10/12 mt-5 mx-auto justify-center items-center'>
                        <input className='w-7/12 p-2.5' placeholder='Your Email' type="text" />
                        <div className='outline-white px-6 p-2 border-2'>
                        <button className='text-center' type='button'>Subscribe</button>
                        </div>
                </div>
            </div>
            <div className='w-5/12'>
                <img src={item} alt="bro" />
            </div>
        </div>
            <div>
                <img src={imgLast} alt="" />
            </div>
            </>
    )
}
