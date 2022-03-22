import * as React from 'react'
import {useRoutes} from 'react-router-dom'
import {QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
import {routes} from './routes'

import {getClient} from "./queryClient";
import Gnb from "./components/Gnb";

function App(props: any) {
  const elem = useRoutes(routes)
  const queryClient = getClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Gnb/>
      {elem}
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App