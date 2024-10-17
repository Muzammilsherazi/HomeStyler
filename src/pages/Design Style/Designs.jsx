import React , {useEffect} from "react";
import designCss from "./designs.module.css";
import bannerImg from "../../assets/images/bathroom/antique vanity mirror .jpg";
import img from "../../assets/images/random.jpg";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import livingroomDesign from "../../Json files/designStyle/livingDesign.json";
import bathroomDesign from "../../Json files/designStyle/bathroomDesign.json";
import bedroomDesign from "../../Json files/designStyle/bedroomDesign.json";
import kitchenDesign from "../../Json files/designStyle/kitchenDesign.json";
import listCss from "../Products list/productList.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import DesignCard from "../../components/DesignCard";

const dataFiles = {
  livingroomDesign,
  bathroomDesign,
  bedroomDesign,
  kitchenDesign,
};

function Designs() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
}, []);


  const { category, id } = useParams();

  let categoryData = dataFiles[`${category}`];
  console.log("categoryData", categoryData);
  var eachData;
  if (category === "livingroomDesign") {
    eachData = categoryData.living_room_designs;
  } else if (category === "bathroomDesign") {
    eachData = categoryData.bathroom_designs;
  } else if (category === "bedroomDesign") {
    eachData = categoryData.bedroom_designs;
  } else if (category === "kitchenDesign") {
    eachData = categoryData.kitchen_room_designs;
  }
  //   console.log(eachData);

  return (
    <>
      <div className={listCss.banner}>
        <div className={listCss.overlay}></div>
        <h1 className={listCss.topHead}>{category}</h1>
      </div>
      
      <div className={listCss.productsListSection}>
        <div className={listCss.productList}>
          {eachData.map((item, index) => (
            <DesignCard
              description={item.description}
              id={index}
              image={item.image_link}
              category={item.category}
            />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default Designs;
