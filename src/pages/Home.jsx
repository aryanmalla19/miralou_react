import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import Conatiner from '../components/Conatiner'
import Categories from '../components/Categories'
import Products from '../components/Products'
import AboutMiralou from '../components/AboutMiralou'
import About2 from '../components/About2'
import TwoPart from '../components/TwoPart'

export default function Home() {

  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://miralou-api.sagarlama.com/api/home').then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data.data)
        setData(data.data)
      }).catch((e) => {
        setData({
          categories: [],
          new_arrivals: []
        })
      })
  }, [])
return (
  <div>
    <Navbar />
    <Conatiner />
    <Categories dataa={data} />
    <Products dataa={data?.new_arrivals} />
    <AboutMiralou />
    <About2 />
    <TwoPart />
  </div>
)
}
