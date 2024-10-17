import React from 'react'
import { furnitureSubProducts } from './DropdownItems'
import dropdownCss from './components-css/Dropdown.module.css'
import { Link } from 'react-router-dom'
function FurnitureSubDropdown({closeNav}) {
  return (
    <>
      <ul className={dropdownCss.productDropdown} id={dropdownCss.subProductDropdown}>
        {furnitureSubProducts.map(item => (
          <Link to={`${item.path}/${item.category}/${item.id}`}
            key={item.id}
            className={dropdownCss.item}
            onClick={closeNav}
          >
            {item.title}
            </Link>
        ))}
      </ul>

    </>
  )
}

export default FurnitureSubDropdown