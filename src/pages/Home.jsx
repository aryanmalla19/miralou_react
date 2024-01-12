import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import Conatiner from '../components/Conatiner'
import Categories from '../components/Categories'
import Products from '../components/Products'
import AboutMiralou from '../components/AboutMiralou'
import About2 from '../components/About2'
import TwoPart from '../components/TwoPart'

export default function Home() {

  const [data,setData] = useState()

  useEffect(()=>{
    const home_data = fetch('https://miralou-api.sagarlama.com/api/home').then((response)=>{
      return response.json().then((data)=>{
        setData(data.data)
      })
    })
  },[])

  return (
    <div>
        <Navbar  />
        <Conatiner/>
        <Categories/>
        <Products/>
        <AboutMiralou/>
        <About2/> 
        <TwoPart/>
    </div>
  )
}
