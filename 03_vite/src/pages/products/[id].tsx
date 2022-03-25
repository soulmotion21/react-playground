import * as React from 'react'
import {useQuery} from "react-query";
import {fetcher, QueryKeys} from "../../queryClient";
import {Product} from "../../types";
import {useParams} from "react-router-dom";
import ProductDetail from "../../components/products/ProductDetail";

function ProductDetailPage() {
  const {id} = useParams()

  const {data} = useQuery<Product>([QueryKeys.PRODUCTS, id], () => fetcher({
    method: 'GET',
    path: `/products/${id}`,
  }))

  if (!data) return null

  return (
    <ProductDetail item={data}/>

  )
}

export default ProductDetailPage
