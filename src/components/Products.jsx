import React from 'react'
import svg from "../assets/star.svg"

export default function Products({ dataa }) {
    console.log(dataa)
    return (
        <div className='w-9/12 mx-auto mb-12'>
            <div>
                <h1 className='font-serif text-5xl text-center mb-3'>
                    New Arrivals
                </h1>
                <p className='text-center mb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi enim. Duis in tortor sit amet turpis rutrum fermentum
                    in non arcu. Praesent porta auctor odio a suscipit. Quisque sagittis suscipit ultricies.
                </p>
            </div>
            <div className='flex-wrap flex justify-between'>
                {
                    dataa?.map((new_arr) => {
                        return (
                            <div className='w-60 mb-5'>
                                <div>
                                    <img src={new_arr.image} alt='idk' />
                                </div>
                                <div className='flex mt-2'>
                                    <img src={svg} alt="" />
                                    <p className='ml-1 text-sm mt-1'>{new_arr.rating} review</p>
                                </div>
                                <div>
                                    <p className='text-base font-bold'>{new_arr.name}</p>
                                    <p className='text-base font-bold'>$ {new_arr.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='mt-10 mx-auto flex items-center justify-center'>
                <button className='rounded-md border-2 p-2 px-12 border-black'>
                    Buy Now
                </button>
            </div>
        </div>
    )
}
