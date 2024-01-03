import React from 'react'
import ProductPhoto from "../assets/productPhoto.png"
import svg from "../assets/star.svg"
const product = <div className='w-60'>
                    <div>
                    <img src={ProductPhoto}/>
                    </div>
                    <div className='flex mt-2'>
                        <img src={svg} alt="" />
                        <p className='ml-1 text-sm mt-1'>1 review</p>
                    </div>
                    <div>
                        <p className='text-base font-bold'>Anti-Ance Serum</p>
                        <p className='text-base font-bold'>$ 4.99</p>
                    </div>
                </div>
export default function Products() {
    return (
        <div className='container mx-auto'>
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
                {product}
                {product}
                {product}
                {product}
                {product}
                {product}
                {product}
                {product}
            </div>
            <div className='mt-10 mx-auto flex items-center justify-center'>
                <button className='rounded-md border-2 p-2 px-12 border-black'>
                    Buy Now
                </button>
            </div>
        </div>
    )
}
