import React from 'react'
import'./Input_feild.module.css';

function Input_feild(props) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}

export default Input_feild