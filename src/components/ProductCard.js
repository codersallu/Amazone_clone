import React from 'react'
import { useStateValue } from './StateProvider'
import "./ProductCard.css"


export  const ProductCard = ({id,title,image,price,rating}) => {

    const [{basket},dispatch]= useStateValue();
const removeItem = () =>{
    dispatch({
        type:"REMOVE_ITEM_FROM_CARD",
        id:id
    })
} 


  return (
    
    <div className='productcard'>
        <img className="productcard__image" src={image} alt="" />
        <div className='productcard__info'>
            <p className='prductcard__title'>{title}</p>
            <p className='prductcard__price'>{price}</p>
       
        <div className='prductcard__rating'>
            {Array(rating).fill().map((_)=><p>*</p>)}
        </div>
        <button onClick={removeItem}>Remove from basket</button>
        </div>
    </div>
  )
}

