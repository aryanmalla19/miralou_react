import React, { useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import svg from "../assets/star.svg"
import useProducts from '../api/useProducts'

const categories = [
  {
    value: 'children',
    label: 'children'
  },
  {
    value: 'women',
    label: 'women'
  },
  {
    value: 'men',
    label: 'men'
  },
  {
    value: 'preg-women',
    label: 'pregnant Women'
  },
]
export default function Shop() {
  const [selectCategories, setSelectCategories] = useState(0);
  const {data, loading} = useProducts();

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
        <div className='flex flex-col w-4/12'>
          <h1 className='font-bold text-xl'>Categories</h1>
          {categories.map((cat,idx) => (
            <div key={cat.value}>
              <label htmlFor={cat.id}>
                <input type="checkbox" name={cat.value} id={cat.value} onChange={handleChange} value={parseInt(idx+1)} checked={selectCategories === parseInt(idx+1)} />
                <span>{cat.label}</span>
              </label>
            </div>
          ))}
        </div>
        <div className='flex w-8/12 flex-wrap justify-between'>
        {loading ? "Loading......." : null}
          {
            data?.data.map((product) => {
              if(selectCategories===product.category_id){
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
              else if(selectCategories===0){
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
              else{
                return null;
              }
            }
              
            )
          }
        </div>
      </div>
    </div>
  )
}
