import React from 'react'
import cardCss from './components-css/ProductCard.module.css'
import { MdArrowOutward } from "react-icons/md";
// import img from '../assets/images/random.jpg'
import { Link } from 'react-router-dom';

function ProductCard({ name, id, image, description, category, price }) {
    console.log("price", price)
    return (
        <div className={cardCss.productCard_parent}>
            <div className={cardCss.productCard} key={id}>
                <img src={image} alt={name} className={cardCss.img} />
                <h2 className={cardCss.h2}>{name}</h2>
                <p className={cardCss.p}>
                    {description}   
                </p>
                <div className={cardCss.btn}>
                    <Link to={`/design-detail/${category}/${id}`}><button className={cardCss.button} ><MdArrowOutward /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard