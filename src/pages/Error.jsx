import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  return (
    <div>
        <h2>Something goes wrong</h2>
        <p>An error happens : {error.statusText || error.message}</p>
     
    </div>
  )
}

export default Error