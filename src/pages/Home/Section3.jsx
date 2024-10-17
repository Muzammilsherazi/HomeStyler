import React from 'react'
import DesignerCard from '../../components/DesignerCard'
import designers from '../../Json files/designers.json'
import section3Css from './home css/section3.module.css'

function Section3() {


  return (
    <>
      <div className={section3Css.designersGallery_section}>
        <h1 className={section3Css.head1}>Designers Gallery</h1>
        <div className={section3Css.eachDesigner}>
          {designers.map(item => (
            <DesignerCard id={item.id} name={item.name} image={item.profileImage}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Section3