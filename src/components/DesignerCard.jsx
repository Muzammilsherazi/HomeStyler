import React from 'react'
import playerCss from './components-css/designerCard.module.css'
import { Link } from 'react-router-dom';

function DesignerCard({image , name , id}) {
  
  return (
    <>
        <div className={playerCss.playerCard}>
          <Link to={`designer-profile/${id}`}>
           <img src={new URL(image, import.meta.url).href} alt="" />
           <h1 className={playerCss.playerName}>{name}</h1>
           </Link>         
        </div>
    </>
  )
}

export default DesignerCard