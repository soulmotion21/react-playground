import * as React from 'react'
import {useQuery} from "react-query";
import {fetcher, graphqlFetcher, QueryKeys} from "../../queryClient";
import {Product} from "../../types";
import {useParams} from "react-router-dom";
import ProductDetail from "../../components/products/ProductDetail";
import GET_PRODUCTS from "../../graphql/products";

function ProductDetailPage() {
  const {id} = useParams()

  // const {data} = useQuery<Product>([QueryKeys.PRODUCTS, id], () => fetcher({
  //   method: 'GET',
  //   path: `/products/${id}`,
  // }))

  const {data} = useQuery(QueryKeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS)
  )

  if (!data) return null

  return (
    <ProductDetail item={data}/>

  )
}

export default ProductDetailPage
