import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import furniture from "../../Json files/furniture.json";
import lighting from "../../Json files/lighting.json";
import bathroom from "../../Json files/bathroom.json";
import kitchen from "../../Json files/kitchen.json";
import decor from "../../Json files/decor.json";
import listCss from "../Products list/productList.module.css";
import ProductCard from "../../components/ProductCard";
import ScrollToTop from "../../components/ScrollToTop";

const dataFiles = {
  furniture,
  lighting,
  decor,
  bathroom,
  kitchen,
};

function ProductsList() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);


  const { category, id } = useParams();
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [sortOrder, setSortOrder] = useState(""); // State for sorting

  let categoryData = dataFiles[`${category}`];
  let eachData = categoryData.find((item) => item.id == id);
  console.log("fine", categoryData)
  // Filter products based on the search term
  const filteredProducts = eachData.products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products based on the selected sort order
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "nameAsc") {
      return a.name.localeCompare(b.name); // Ascending by name
    } else if (sortOrder === "nameDesc") {
      return b.name.localeCompare(a.name); // Descending by name
    } else if (sortOrder === "priceAsc") {
      return a.price - b.price; // Ascending by price
    } else if (sortOrder === "priceDesc") {
      return b.price - a.price; // Descending by price
    }
    return 0; // No sorting if no option is selected
  });

  return (
    <>
      <div className={listCss.banner}>
        <div className={listCss.overlay}>
          <h1 className={listCss.topHead}>{eachData.category}</h1>
        </div>
      </div>

      <div className={listCss.top_players_section}>
        <div className={listCss.top_content}>
          <h1>Search And Sorting Products</h1>
          <div className={listCss.searching_section}>
            {/* Sort dropdown */}
            <label htmlFor="sort-options">Sort by:</label>
            <select
              className={listCss.sort_options}
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)} // Update sort order
            >
              <option value="">Select</option>
              <option value="nameAsc">Name (A-Z)</option>
              <option value="nameDesc">Name (Z-A)</option>
              <option value="priceAsc">Price (Low to High)</option>
              <option value="priceDesc">Price (High to Low)</option>
            </select>
          </div>
        </div>
        <div className={listCss.table_container}>
          {/* Search Controls */}
          <div className={listCss.table_controls}>
            <input
              type="text"
              className="search-player"
              placeholder="Search by Product Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
          </div>
        </div>
      </div>

      <div className={listCss.productsListSection}>
        {/* <h1 className={listCss.topHead}>{eachData.category}</h1> */}
        <div className={listCss.productList}>
          {sortedProducts.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              description={item.description}
              id={item.id}
              image={item.image}
              category={item.category}
              price={item.price} // Ensure price is available in the ProductCard component
            />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default ProductsList;
