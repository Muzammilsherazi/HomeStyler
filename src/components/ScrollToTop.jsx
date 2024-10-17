import React,{ useEffect }  from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function ScrollToTop() {
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

    return null;
}

export default ScrollToTop