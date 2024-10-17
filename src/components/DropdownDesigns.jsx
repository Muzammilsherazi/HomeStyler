import React from 'react'
import { designs } from './DropdownItems'
import { Link, NavLink } from 'react-router-dom'
import dropdownCss from './components-css/Dropdown.module.css'
import { IoIosArrowForward } from "react-icons/io";

function DropdownDesigns() {

  return (
    <>
      <ul className={dropdownCss.designDropdown}>
        {designs.map(item => (
          <Link to={`${item.path}/${item.category}/${item.id}`} key={item.id} className={dropdownCss.item}>
            {item.title}
          </Link>
        ))}
      </ul>
    </>
  )
}

export default DropdownDesigns  