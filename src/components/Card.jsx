import React from 'react'
import "./Card.css"
import Btn from "./Btn"

const Card = ({language,img,btnName}) => {
  return (
    <div className='card'>
      <div className="title">
        <h2>{language}</h2>
      </div>
      <div className="img-container">
        <img src={img} alt="img" />
      </div>
      <Btn btnName={btnName}/>        


    </div>
  )
}

export default Card