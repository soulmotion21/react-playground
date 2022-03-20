import {useQuery} from "react-query";
import {fetcher, QueryKeys} from "../../queryClient";
import ProductItem from "../../components/products/ProductItem";
import {Product} from "../../types";

const ProductList = () => {

  const {data} = useQuery(QueryKeys.PRODUCTS, () => fetcher({
    method: 'GET',
    path: '/products'
  }))

  console.log(data);

  return (
    <ul>
      {
        data?.map((product: Product) => {
          return (
            <ProductItem {...product} key={product.id}/>
          )
        })
      }
    </ul>
  )
}

export default ProductList
