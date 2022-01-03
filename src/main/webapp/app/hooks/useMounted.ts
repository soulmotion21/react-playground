import * as React from 'react'

function useMounted() {
  const [mounted, setMounted] = React.useState<boolean>(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

export default useMounted
