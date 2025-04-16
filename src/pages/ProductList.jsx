import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {

    console.log(searchParams.get('page'))
    console.log(searchParams.get('category'))

  },[])
  return (
    <div>ProductList</div>
  )
}

export default ProductList