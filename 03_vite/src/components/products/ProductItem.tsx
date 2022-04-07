import * as React from 'react'
import {Product} from "../../types";
import {Link} from "react-router-dom";
import {PRODUCT} from "../../graphql/products";

function ProductItem({id, imageUrl, price, title, description, createdAt}: PRODUCT) {
  return (
    <li>
      <Link to={`/products/${id}`}>
        <p>{title}</p>
        <img src={imageUrl} alt={title}/>
        <span>{price}</span>
      </Link>
    </li>
  )
}

export default ProductItem