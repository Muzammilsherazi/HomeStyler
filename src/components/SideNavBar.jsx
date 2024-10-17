import React , {useState} from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import sideNavCss from "./components-css/SideNavbar.module.css";
import DropdownProducts from "./SideProductDropdown";
import DropdownDesigns from "./SideDesignDropdown";
// import dropdownCss from './components-css/Dropdown.module.css';


function SideNavbar({ closeNav }) {

  const [isProductDropdown, setIsProductDropdown] = useState(false);
  const [isDesignDropdown, setIsDesignDropdown] = useState(false);


  return (
    <div className={sideNavCss.sidenav}>
      <ul className={sideNavCss.ul}>
        <NavLink to="/" onClick={closeNav}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" onClick={closeNav}>
          <li>About</li>
        </NavLink>
        <a
            onMouseEnter={() => setIsProductDropdown(true)}
            onMouseLeave={() => setIsProductDropdown(false)}  
        >
          <li>Products</li>
          {isProductDropdown && <DropdownProducts closeNav={closeNav} />}
        </a>
        <a 
            onMouseEnter={() => setIsDesignDropdown(true)}
            onMouseLeave={() => setIsDesignDropdown(false)}  
        >
          <li>Design-Style</li>
          {isDesignDropdown && <DropdownDesigns closeNav={closeNav} />}
        </a>
        <NavLink to="/feedback" onClick={closeNav}>
          <li>Feedback</li>
        </NavLink>
        <NavLink to="/contact" onClick={closeNav}>
          <li>Contact us</li>
        </NavLink>
        <NavLink to="/sitemap" onClick={closeNav}>
          <li>SiteMap</li>
        </NavLink>
      </ul>
        

    </div>
  );
}

export default SideNavbar;
