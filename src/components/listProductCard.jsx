import React from 'react'
import cardCss from './components-css/ProductCard.module.css'
import { MdArrowOutward } from "react-icons/md";
import img from '../assets/images/random.jpg'
import { Link } from 'react-router-dom';

function ProductCard({ name, id, image, description, category }) {

    console.log(category);
    
    return (
        <>
            <div className={cardCss.productCard} key={id}>
                <img src={img} alt={name} className={cardCss.img} />
                <h2 className={cardCss.h2}>{name}</h2>
                <p className={cardCss.p}>
                    {description}
                </p>
                <div className={cardCss.btn}>
                    <Link to={`product-list/:category/:subId/product-detail/${category}/${id}`}><button className={cardCss.button} onClick={id}><MdArrowOutward /></button></Link>
                </div>
            </div>
        </>
    )
}

export default ProductCard