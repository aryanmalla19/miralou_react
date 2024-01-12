import React from 'react'
export default function Categories({dataa}) {
    return (
        <div className='w-9/12 mb-24 mx-auto'>

            <div className='flex justify-between'>
                {
                    dataa?.categories.map((data) => {
                        return (
                            <div className='w-56 relative flex justify-center'>
                                <img src={data.image} className='z-[1]' alt="" />
                                <div className='w-9/12 absolute mt-[-13px] z-10 py-1.5  -bottom-5  bg-slate-300'>
                                    <p className='text-center'>
                                        {data.name}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
