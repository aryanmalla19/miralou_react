import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import Conatiner from '../components/Conatiner'
import Categories from '../components/Categories'
import Products from '../components/Products'

export default function Home() {
  return (
    <div>
        <Navbar  />
        <Conatiner/>
        <Categories/>
        <Products/>
    </div>
  )
}
