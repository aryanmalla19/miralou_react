import React from 'react'
import photo1 from "../assets/Rectangle1.png"
import photo2 from "../assets/Rectangle2.png"
import photo3 from "../assets/Rectangle3.png"
import photo4 from "../assets/Rectangle4.png"
const data = [
    {
        photo: photo1 , text: "For Women"
    },
    {
        photo:  photo2 , text: "For Men"
    },
    {
        photo: photo3 , text: "For Pregnant Women"
    },
    {
        photo:  photo4 , text: "For Children"
    },

]

export default function Categories() {
    return (
        <div className='w-9/12 mb-24 mx-auto'>

            <div className='flex justify-between'>

                {
                    data.map((data, i) => {
                        return (
                            <div className='w-56' key={i}>
                                <img src={data.photo} alt="" />
                                <div className='w-9/12 py-1 mx-auto bg-slate-300'>
                                    <p className='text-center'>
                                        {data.text}
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
