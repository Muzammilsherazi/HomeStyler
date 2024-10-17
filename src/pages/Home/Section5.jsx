import React from 'react'
import ReviewsData from '../../components/ReviewsData'
import section5Css from './home css/section5.module.css'

function Section5() {
  return (
    <div className={section5Css.section_2}>
      <h1 className={section5Css.h1}>Our Reviews</h1>
      <div className={section5Css.reviews}>
        <ReviewsData />
      </div>
    </div>

  )
}

export default Section5