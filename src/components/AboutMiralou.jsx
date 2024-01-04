import React from 'react'
import Home from "../assets/Home.png"
export default function AboutMiralou() {
    return (
        <div className='mt-28 w-9/12 mx-auto mb-12'>
            <div className='flex justify-between'>
                <img className='w-4/12' src={Home} alt='GIRL' />
                <div className='w-7/12 mt-12'>
                    <h1 className='font-serif text-5xl font-medium mb-5'>
                        About Miralou
                    </h1>
                    <div>
                    <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla turpis. Donec pharetra turpis sit amet felis tempus placerat. Suspendisse cursus fringilla sapien ut mattis. Aenean bibendum metus est, vitae egestas massa elementum vitae. Fusce eleifend urna nec est finibus, ne</p>
                    <p className='mb-2'>Duis neque velit, posuere sed mauris eu, ullamcorper convallis elit. Sed posuere volutpat mauris, non venenatis est ultrices a. Ut sit amet sapien dapibus lectus suscipit gravida. Fusce a justo dolor.</p>
                    <p className='mb-2'>Pellentesque nec neque in augue vulputate congue at sit amet ante. Pellentesque euismod est at sapien suscipit, at blandit diam gravida. In est lacus, convallis eget dui ut, bibendum fermentum velit. Praesent et consequat elit.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
