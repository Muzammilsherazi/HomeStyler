import React from "react";
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

const dataFiles = {
  furniture,
  lighting,
  decor,
  bathroom,
  kitchen,
};

function Detail() {
  let { category, id } = useParams();

  let eachProduct;

  if (furniture.find((item) => item.category === category)) {
    eachProduct = furniture.find((item) => item.category === category);
  } else if (lighting.find((item) => item.category === category)) {
    eachProduct = lighting.find((item) => item.category === category);
  } else if (decor.find((item) => item.category === category)) {
    eachProduct = decor.find((item) => item.category === category);
  } else if (bathroom.find((item) => item.category === category)) {
    eachProduct = bathroom.find((item) => item.category === category);
  } else if (kitchen.find((item) => item.category === category)) {
    eachProduct = kitchen.find((item) => item.category === category);
  } else {
    return <h1>Prodduct not found!</h1>;
  }

  var eachProduct2 = eachProduct.products.find((item) => item.id === id);

  const handleClick = () => {
    // console.log(JSON.stringify(eachProduct2));
    let storedProducts =
      JSON.parse(localStorage.getItem("productsArray")) || [];

    if (storedProducts.length > 0) {
      let productString = storedProducts;
      let findData = productString.find((re) => {
        return re.id == eachProduct2.id;
      });
      console.log(findData);
      if (findData) {
        alert("Already in wishlist");
      } else {
        storedProducts.push(eachProduct2);
        localStorage.setItem("productsArray", JSON.stringify(storedProducts));
        alert("ADDED in wishlist");
      }
    } else {
      localStorage.setItem("productsArray", JSON.stringify([eachProduct2]));
      alert("ADDED in wishlist");
    }
    // if (!storedProducts.includes(productString)) {
    //   storedProducts.push(productString);

    //   localStorage.setItem("productsArray", JSON.stringify(storedProducts));
    // }
  };

  return (
    <>
      <div className={deCSS.detail_section}>
        <div className={deCSS.banner}>
          <img src={bannerImg} alt="" />
          <h1>{eachProduct2.name}</h1>
        </div>

        <div className={deCSS.detail}>
          <div>
            <div className={deCSS.head}>
              <img src={eachProduct2.image} alt="" />
            </div>
          </div>

          <div className={deCSS.body}>
            <h1>{eachProduct2.name}</h1>
            <p>{eachProduct2.description}</p>
            <h4>Rating: {eachProduct2.ratings}</h4>
            <p>{eachProduct2.longDescription}</p>
            <div className={deCSS.Heart_div}>
              <CiHeart onClick={handleClick} className={deCSS.Heart} />
            </div>

            <h5 className={deCSS.category}>
              <b>Category</b> <IoIosArrowRoundForward /> {eachProduct2.category}
            </h5>
          </div>

          <div className={deCSS.bottom} >
            <div className={deCSS.h1}>
              <h1>Reviews </h1>
            </div>
            <div className={deCSS.review_parent}>

              {eachProduct2.reviews.map((review) => (
                <div className={deCSS.Review}>
                  <div className={deCSS.head}>
                    <h5>User: {review.user}</h5>
                    <p>{review.comment}</p>
                  </div>
                  <div className={deCSS.star}>Rating : {review.rating}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
