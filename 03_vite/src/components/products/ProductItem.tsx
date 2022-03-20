import * as React from 'react'
import {Product} from "../../types";

function ProductItem({category, description, id, image, price, rating, title}: Product) {
  return (
    <li>
      <p>{category}</p>
      <p>{description}</p>
      <img src={image}/>
      <span>{price}</span>
      <span>{rating.rate}</span>
    </li>
  )
}

export default ProductItem