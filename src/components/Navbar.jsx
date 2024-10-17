import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import DropdownProducts from "./DropdownProducts";
import DropdownDesigns from "./DropdownDesigns";
import navCss from "./components-css/Navbar.module.css"; // CSS module import
import logo from "../assets/images/Logo.png";
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaBars } from "react-icons/fa";
import SideNavbar from "./SideNavBar"; // Import SideNavbar
import Wishlist from "./Wishlist";

function Navbar() {
  const [isProductDropdown, setIsProductDropdown] = useState(false);
  const [isDesignDropdown, setIsDesignDropdown] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);

  // Create a ref for the side navbar
  const sideNavRef = useRef(null);
  const wishlistRef = useRef(null);

  // Close side navbar on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setIsSideNavOpen(false);
      }
    };

    if (isSideNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSideNavOpen]);


  const handleWishlist = () =>{
    setWishlistOpen(true)
  }



  return (
    <nav className={navCss.navbar}>
      <div className={navCss.left}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className={navCss.ul}>
        <NavLink to="/" className={({ isActive }) => (isActive ? navCss.active : "")}>
          <li>Home</li>
          <div className={navCss.line}></div>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? navCss.active : "")}>
          <li>About</li>
          <div className={navCss.line}></div>
        </NavLink>
        <a
          onMouseEnter={() => setIsProductDropdown(true)}
          onMouseLeave={() => setIsProductDropdown(false)}
        >
          <li>Products</li>
          {isProductDropdown && <DropdownProducts />}
          <div className={navCss.line}></div>
        </a>
        <a
          onMouseEnter={() => setIsDesignDropdown(true)}
          onMouseLeave={() => setIsDesignDropdown(false)}
        >
          <li>Design-Style</li>
          {isDesignDropdown && <DropdownDesigns />}
          <div className={navCss.line}></div>
        </a>
        <NavLink to="/feedback" className={({ isActive }) => (isActive ? navCss.active : "")}>
          <li>Feedback</li>
          <div className={navCss.line}></div>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? navCss.active : "")}>
          <li>Contact us</li>
          <div className={navCss.line}></div>
        </NavLink>
        <NavLink to="/sitemap" className={({ isActive }) => (isActive ? navCss.active : "")}>
          <li>SiteMap</li>
          <div className={navCss.line}></div>
        </NavLink>
      </ul>
      <div className={navCss.right}>
        <i>
          <FaBars onClick={() => setIsSideNavOpen(true)} className={navCss.barIcon} />
        </i>

        <i>
          <FaHeart onClick={handleWishlist} className={navCss.heartIcon} />
        </i>
      </div>

      {/* Side Navbar Component */}
      {isSideNavOpen && (
        <div ref={sideNavRef}>
          <SideNavbar closeNav={() => setIsSideNavOpen(false)} />
        </div>
      )}

      {isWishlistOpen && (
        <div ref={wishlistRef}>
          <Wishlist closeWishlist={() => setWishlistOpen(false)} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
