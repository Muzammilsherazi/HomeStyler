import React from 'react'
import { bathroomSubProducts } from './DropdownItems'
import dropdownCss from './components-css/Dropdown.module.css'
import { Link } from 'react-router-dom'

function BathroomSubDropdown({closeNav}) {
  return (
    <>
    <ul className={dropdownCss.productDropdown} id={dropdownCss.subProductDropdown}>
      {bathroomSubProducts.map(item => (
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

export default BathroomSubDropdown