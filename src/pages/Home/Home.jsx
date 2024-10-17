import React, { useEffect, useState  } from 'react'
import productsData from '../../Json files/products.json'
import Section1 from './Section1'
import Section2 from './Section2'
import Section5 from './Section5'
import Section3 from './Section3'
import Wishlist from '../../components/Wishlist'
function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
}, []);


  return (
    <>
    {/* <Wishlist/>  */}
      <Section1/>
      <Section2/>
      <Section3/>
      <Section5/> 
    </>
  )
}

export default Home