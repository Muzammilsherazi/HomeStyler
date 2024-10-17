import React from 'react'
import deCSS from "./components-css/detail.module.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import bannerImg from "../assets/images/detail-banner-img.jpeg";
import img from "../assets/images/random.jpg";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useParams } from "react-router-dom";
import furniture from "../Json files/furniture.json";
import kitchen from "../Json files/kitchen.json";
import lighting from "../Json files/lighting.json";
import decor from "../Json files/decor.json";
import bathroom from "../Json files/bathroom.json";
import { IoIosArrowRoundForward } from "react-icons/io";
import livingroomDesign from '../Json files/designStyle/livingDesign.json'
import bathroomDesign from '../Json files/designStyle/bathroomDesign.json'
import bedroomDesign from '../Json files/designStyle/bedroomDesign.json'
import kitchenDesign from '../Json files/designStyle/kitchenDesign.json'


const dataFiles = {
    livingroomDesign,
    bathroomDesign,
    bedroomDesign,
    kitchenDesign,
};


function DesignDetail() {

    const { category, id } = useParams();


    // let categoryData = dataFiles[`${category}`];
    // console.log("categoryData", categoryData);
    var eachData;
    if (category === "livingroom") {
        eachData = livingroomDesign.living_room_designs;
    } else if (category === "bathroom") {
        eachData = bathroomDesign.bathroom_designs;
    } else if (category === "bedroom") {
        eachData = bedroomDesign.bedroom_designs;
    } else if (category === "kitchen") {
        eachData = kitchenDesign.kitchen_room_designs;
    }

    let eachDesign = eachData[id];

    return (
        <>

            <div className={deCSS.detail_section}>
                <div className={deCSS.banner}>
                    <img src={eachDesign.image_link} alt="" />
                </div>

                <div className={deCSS.detail}>
                    <div>
                        <div className={deCSS.head}>
                            <img src={eachDesign.image_link} alt="" />
                        </div>
                        <div className={deCSS.bottom}>
                        <div className={deCSS.h1}>
                            <h1>Description </h1>
                            <p className={deCSS.descPara}>{eachDesign.description}</p>
                        </div>
                    </div>
                    </div>


                    <div className={deCSS.body}>
                        <h1>Used Products</h1>
                        <div className={deCSS.usedProducts}>
                            {eachDesign.products.map(item => (
                                <div className={deCSS.product}>
                                    <p className={deCSS.p}>Name:  <span className={deCSS.span}>{item.name}</span></p>
                                    <p className={deCSS.p}>Price:  <span className={deCSS.span}>{item.price}</span></p>
                                    <p className={deCSS.p}>Material:  <span className={deCSS.span}>{item.material}</span></p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DesignDetail