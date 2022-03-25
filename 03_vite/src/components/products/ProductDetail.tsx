import * as React from 'react'
import {Product} from "../../types";

function ProductDetail({
                         item: {category, title, image, description, price, rating: {rate}}
                       }: { item: Product }) {
  return (
    <div className='product-detail'>
      <p>{category}</p>
      <p>{title}</p>
      <img src={image} alt={title}/>
      <p>{description}</p>
      <span>{price}</span>
      <span>{rate}</span>
    </div>
  )
}

export default ProductDetail