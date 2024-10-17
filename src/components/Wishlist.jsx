import React, { useState, useEffect } from "react";
import wishlist from "./components-css/wishlist.module.css";
import img from "../assets/images/random.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

function Wishlist({ closeWishlist }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to fetch data from localStorage when the component mounts
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('productsArray')) || [];
    setWishlistItems(storedWishlist);
  }, []);

  // Function to handle the delete action
  const handleDelete = (index) => {
    const updatedWishlist = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedWishlist);

    localStorage.setItem('productsArray', JSON.stringify(updatedWishlist));
  };

  // Function to clear the entire wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem('productsArray');
  };

  return (
    <div>
      <div className={wishlist.main}>
        <div className={wishlist.head}>
          <h1>WishList</h1>
        </div>
        
        <div className={wishlist.scroll}>
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item, index) => (
             
              <div key={index} className={wishlist.bottom}>
                <div className={wishlist.image}>
                  <img src={item.image || img} alt={item.name || "Product"} />
                </div>
                <div className={wishlist.content}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className={wishlist.rating}>
                  Rating: {item.ratings || "N/A"}
                </div>
                <div className={wishlist.delete} onClick={() => handleDelete(index)}>
                    <RiDeleteBin6Line />
                  </div>  
              </div>
            ))
          ) : (
            <p className={wishlist.emptyMsg}>Your wishlist is empty.</p>
          )}
        </div>

        <div className={wishlist.btn}>
          <button onClick={clearWishlist}>Clear WishList</button>
        </div>

        <i onClick={closeWishlist} className={wishlist.closeBtn}><CgClose/></i>
      </div>
    </div>
  );
}

export default Wishlist;
