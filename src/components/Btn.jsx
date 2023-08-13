import React from 'react'
import BtnStyle from "./Btn.module.css"


const Btn = ({btnName}) => {
  return (
<button className={BtnStyle.btn}>{btnName}</button>  )
}

export default Btn