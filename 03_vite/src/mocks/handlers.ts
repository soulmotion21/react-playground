import {graphql} from "msw";
import {v4 as uuid} from 'uuid'
import GET_PRODUCTS from "../graphql/products";

const mock_products = Array.from({length: 20}).map((_, i) => ({
  id: uuid(),
  imageUrl: `https://placeimg.com/200/150/${i + 1}`,
  price: 50000,
  title: `상품${i + 1}`,
  description: `내용${i + 1}`,
  createAt: new Date(1648880952662 + (i * 1000 * 60 * 60 * 10)).toString()
}))

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products
      })
    )
  })
]
