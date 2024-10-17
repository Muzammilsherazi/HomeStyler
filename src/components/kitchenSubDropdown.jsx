import React from 'react'
import { kitchenSubProducts } from './DropdownItems'
import dropdownCss from './components-css/Dropdown.module.css'
import { Link } from 'react-router-dom'

function KitchenSubDropdown({closeNav}) {
  return (
    <>
    <ul className={dropdownCss.productDropdown} id={dropdownCss.subProductDropdown}>
      {kitchenSubProducts.map(item => (
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

export default KitchenSubDropdown