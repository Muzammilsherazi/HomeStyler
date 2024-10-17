import React from 'react'
import designerCss from './components-css/designerProfile.module.css'
import img from '../assets/images/random.jpg'
import designerData from '../Json files/designers.json'
import { useParams } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

function DesignerProfile() {

    const { id } = useParams()

    const eachDesigner = designerData.find(item => item.id == id) 

  return (
    <>
        <div className={designerCss.profileSection}>
            <img src={new URL(eachDesigner.profileImage, import.meta.url).href} alt="" />
            <div className={designerCss.designerInfo}>
                <h1 className={designerCss.topHead}>Designer Info</h1>
                <div className={designerCss.infoDetail}>
                    <div className={designerCss.same}>
                        <h2>name</h2>
                        <p className={designerCss.para}>{eachDesigner.name}</p>
                    </div>
                    <div className={designerCss.same}>
                        <h2>rate</h2>
                        <p className={designerCss.para}>{eachDesigner.rate}</p>
                    </div>
                    <div className={designerCss.same}>
                        <h2>experience</h2>
                        <p className={designerCss.para}>{eachDesigner.experience}</p>
                    </div>
                    <div className={designerCss.same}>
                        <h2>specialty</h2>
                        <p className={designerCss.para}>{eachDesigner.specialty}</p>
                    </div>
                    <div className={designerCss.same}>
                        <h2>contact</h2>
                        <p className={designerCss.para}>{eachDesigner.contact}</p>
                    </div>
                </div>
            </div>
        </div>
        <ScrollToTop />
    </>
  )
}

export default DesignerProfile