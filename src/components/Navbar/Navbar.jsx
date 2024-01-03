import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <header className='w-full'>
            <div className='container pt-4 pb-4 mx-auto flex justify-between'>
                <div className='font-serif leading-none text-2xl'>Miralou</div>
                <div className='flex justify-between w-6/12'>
                    <Link className='' to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/about">About</Link>
                </div>
                <div>Actions</div>
            </div>
        </header>
    )
}
