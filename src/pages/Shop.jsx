import React, { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import svg from "../assets/star.svg"
import useProducts from '../api/useProducts'

const categories = [
  {
    value: '3',
    label: 'children'
  },
  {
    value: '1',
    label: 'women'
  },
  {
    value: '2',
    label: 'men'
  },
  {
    value: '4',
    label: 'pregnant Women'
  },
]
export default function Shop() {
  const [selectCategories, setSelectCategories] = useState(0);
  const [page,setPage] = useState(1);
  const { data, loading } = useProducts({
    category: selectCategories,
    page:page
  });
  const handleNext = (e)=>{
    setPage(page+1)
  }
  const handlePrev = (e)=>{
    if(page>1){
      setPage(page-1)
    }
  }
  const handleChange = (e) => {
    if (parseInt(e.target.value) === selectCategories) {
      setSelectCategories(0)
    }
    else {
      setSelectCategories(parseInt(e.target.value))
    }
  }


  return (
    <div>
      <Navbar />
      <div className='w-10/12 mx-auto mt-12 mb-24 flex'>
        <div className='flex flex-col w-2/12'>
          <h1 className='font-bold text-xl'>Categories</h1>
          {categories.map((cat) => (
            <div key={cat.value}>
              <label htmlFor={cat.id}>
                <input type="checkbox" name={cat.value} id={cat.value} onChange={handleChange} value={cat.value} checked={selectCategories === parseInt(cat.value)} />
                <span>{cat.label}</span>
              </label>
            </div>
          ))}
        </div>

        <div className='flex w-9/12 flex-wrap justify-between'>
          <div className='w-full ml-4 flex'>
            <button onClick={handlePrev}>Previous</button>
            <span className='mx-5 text-center bg-blue-400 p-3 text-white text-sm rounded-full h-8 w-8 flex items-center jusitfy-between'>{page}</span>
            <button onClick={handleNext}>Next</button>
          </div>
          {loading ? "Loading......." : null}
          {
            data?.data.map((product) => {
              return (
                <div className='w-60 mb-5'>
                  <div>
                    <img src={product.image} alt='idk' />
                  </div>
                  <div className='flex mt-2'>
                    <img src={svg} alt="" />
                    <p className='ml-1 text-sm mt-1'>{product.rating} rating</p>
                  </div>
                  <div>
                    <p className='text-base font-bold'>{product.name}</p>
                    <p className='text-base font-bold'>$ {product.price}</p>
                  </div>
                </div>
              )
            }
            )
          }

        </div>
      </div>
    </div>
  )
}
