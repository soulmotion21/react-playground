import * as React from 'react'
import {useRoutes} from 'react-router-dom'
import {QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'

import {getClient} from "./queryClient";

function App(props: any) {
  const queryClient = getClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div>Hello Vite</div>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default App