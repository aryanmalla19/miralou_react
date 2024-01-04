import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import Conatiner from '../components/Conatiner'
import Categories from '../components/Categories'
import Products from '../components/Products'
import AboutMiralou from '../components/AboutMiralou'
import About2 from '../components/About2'

export default function Home() {
  return (
    <div>
        <Navbar  />
        <Conatiner/>
        <Categories/>
        <Products/>
        <AboutMiralou/>
        <About2/> 
    </div>
  )
}
