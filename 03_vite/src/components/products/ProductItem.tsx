import * as React from 'react'
import {Product} from "../../types";
import {Link} from "react-router-dom";

function ProductItem({category, description, id, image, price, rating, title}: Product) {
  return (
    <li>
      <Link to={`/products/${id}`}>
        <p>{category}</p>
        <img src={image} alt={title}/>
        <span>{price}</span>
        <span>{rating.rate}</span>
      </Link>
    </li>
  )
}

export default ProductItem