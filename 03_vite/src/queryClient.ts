import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// import {getTodos, postTodo} from '../my-api'

// Create a client for SSR : Make once
export const getClient = (() => {
  let client: QueryClient | null = null
  return () => {
    if (!client) client = new QueryClient()
    return client
  }
})()

export const fetcher = async ({url, fetchOptions}) => {
  try {
    const res = await fetch(url, fetchOptions)
    const json = await res.json()
    return json
  } catch (err) {
    console.error(err);
  }
}

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS'
}
