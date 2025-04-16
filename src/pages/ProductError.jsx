import React from 'react'
import { useRouteError } from 'react-router-dom'

const ProductError = () => {
    const error = useRouteError();
  return (
    <div style={{padding:'16px'}}>
        <h2>Product Error</h2>
        <p>This is error for Product page : {error.statusText || error.message}</p>
        <button>Browser List of product</button>

    </div>
  )
}

export default ProductError