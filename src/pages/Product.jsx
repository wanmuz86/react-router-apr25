import React from 'react'
import { useParams } from 'react-router-dom'


const Product = () => {

    const {productId} = useParams();
    if (productId > 194) throw new Error('Product is higher than the allowed range')

  return (
    <div>Product for {productId}</div>
  
  )
}

export default Product