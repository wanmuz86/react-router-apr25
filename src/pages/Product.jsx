import axios from 'axios'
import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


// 1)
export const dataLoader = async ({params}) => {
  const response = await axios.get(`https://dummyjson.com/products/${params.productId}`)
  return response.data
}


const Product = () => {

    const {productId} = useParams();
    // 3)
    const response = useLoaderData()
    
    if (productId > 194) throw new Error('Product is higher than the allowed range')

  return (
    <div>Product for {productId}
    {
      response &&
      <div>
        <h2>{response.title}</h2>
        <h3>{response.category} - {response.price}</h3>
        <img src={response.thumbnail} alt={response.title} />
        <p>{response.description}</p>
        <p>{response.rating}</p>
      </div>
    }
    </div>
    
  
  )
}

export default Product