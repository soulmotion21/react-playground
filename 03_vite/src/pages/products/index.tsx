import {useQuery} from "react-query";
import {fetcher, graphqlFetcher, QueryKeys} from "../../queryClient";
import ProductItem from "../../components/products/ProductItem";
import {Product} from "../../types";
import GET_PRODUCTS, {PRODUCTS} from "../../graphql/products";

const ProductList = () => {

  // const {data} = useQuery<PRODUCTS[]>(QueryKeys.PRODUCTS, () => fetcher({
  //   method: 'GET',
  //   path: '/products'
  // }))

  const {data} = useQuery<PRODUCTS[]>(QueryKeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS))

  console.log(data);

  return (
    <ul className='product-item'>
      {
        data?.['products']?.map((product) => {
          return (
            <ProductItem {...product} key={product.id}/>
          )
        })
      }
    </ul>
  )
}

export default ProductList
