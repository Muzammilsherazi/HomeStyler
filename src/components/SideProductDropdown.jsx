import React, { useState } from 'react';
import { Products } from './DropdownItems';
import { Link } from 'react-router-dom';
import dropdownCss from './components-css/SideNavDropdown.module.css';
import { IoIosArrowBack } from "react-icons/io";
import FurnitureSubDropdown from './furnitureSubDropdown';
import LightingSubDropdown from './LightingSubDropdown'; // Import the sub-dropdown
import DecorSubDropdown from './decorSubDropdown';
import KitchenSubDropdown from './kitchenSubDropdown';
import BathroomSubDropdown from './bathroomSubDropdown';

function Dropdown({closeNav}) {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <div className={dropdownCss.dropdowns}>
      <ul className={`${dropdownCss.productDropdown}`}>
        {Products.map(item => (
          <li
            key={item.id}
            className={dropdownCss.item}
            onMouseEnter={() => setActiveProduct(item.title)} // Set active product on hover
          // onMouseLeave={() => setActiveProduct(null)} // Reset on mouse leave
          >

<IoIosArrowBack />
            {item.title}

          </li>
        ))}
      </ul>
      {
        activeProduct === "Furniture" &&
        <div className={dropdownCss.furnitureDropdown}><FurnitureSubDropdown closeNav={closeNav}/></div>
      }
      {
        activeProduct === "Lighting" &&
        <div className={dropdownCss.lightingDropdown}><LightingSubDropdown closeNav={closeNav}/></div>
      }
      {
        activeProduct === "Decor" &&
        <div className={dropdownCss.decorDropdown}><DecorSubDropdown closeNav={closeNav}/></div>
      }
      {
        activeProduct === "Bathroom" &&
        <div className={dropdownCss.bathroomDropdown}><BathroomSubDropdown closeNav={closeNav}/></div>
      }
      {
        activeProduct === "Kitchen" &&
        <div className={dropdownCss.kitchenDropdown}><KitchenSubDropdown closeNav={closeNav}/></div>
      }
    </div>
  );
}

export default Dropdown;
