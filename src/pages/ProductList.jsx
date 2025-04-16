import React, { useEffect } from 'react'
import { useSearchParams, useLoaderData, useNavigation, useNavigate } from 'react-router-dom'
import axios from 'axios';

// 1) I export the function loaders that will return the Data from API
export const loaders = async () => {
  const response = await axios.get('https://dummyjson.com/products')
  return response.data.products
}

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 3) useLoaderData to retrieve the results from loader
  const results = useLoaderData()

  // 4) Get the navigation state from one page to another
  const navigation = useNavigation();

  const navigate = useNavigate();
  useEffect(() => {

    console.log(searchParams.get('page'))
    console.log(searchParams.get('category'))

  },[])
  if (navigation.state ==="loading") return (<div><p>Loading...</p></div>)
  return (
    <div >
      <h2>ProductList</h2>
      {
        results.map(val=> 
        
        <div style={{border:'1px solid black', padding:'16px', margin:'8px'}} key={val.id}>
          <img src={val.thumbnail} alt={val.title}/>
          <h3>{val.title}</h3>
          <p>{val.price} - {val.category}</p>
          <button onClick={()=>navigate(`/products/${val.id}`)}>View product</button>
        </div>)
      }

    </div>
  )
}

export default ProductList