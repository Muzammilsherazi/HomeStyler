import React from "react";
import ProductCard from "../../components/ProductCard";
import section2Css from "./home css/section2.module.css";
import products from "../../Json files/furniture.json";

function Section2() {
  const selectedCategory = "Sofas & Couches"; // Change this to the desired category name
  const data = products.map((product, index) => {
    return product;
  });
  // Filter products based on the selected category
  const topProducts =
    products
      .find((category) => category.category === selectedCategory)
      ?.products.slice(0, 3) || []; // Get the first 3 products or an empty array if not found
  console.log("data", data);
  return (
    <>
      <div className={section2Css.productSection}>
        <h1 className={section2Css.toph1}>Top Products</h1>
        <div className={section2Css.topProducts}>
          {data[0].products.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              description={item.description}
              id={item.id}
              image={item.image}
              category={selectedCategory}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Section2;
