import React from 'react'
import photo from "../assets/productPhoto.png"
export default function About2() {
    const product = <div className='w-4/12'>
        <img className='w-11/12' src={photo} alt="face cream" />
        <div>
            <p className='leading-6 text-sm'>25th July</p>
            <h1 className='text-2xl leading-9 font-medium'>Anti-Acne Serum</h1>
            <p className='text-base leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis</p>
        </div>
    </div>
    return (
        <div className='w-10/12 mx-auto mb-24'>
            <div className='flex w-7/12 mx-auto flex-col items-center justify-center'>
                <h1 className='font-serif text-3xl font-medium mb-2'>About Miralou</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis. Donec pharetra turpis sit  amet feli s tempus placerat. Suspendisse </p>
            </div>
            <div className='flex mt-12 justify-between'>
            {product}
            {product}
            {product}
            </div>
        </div>
    )
}
