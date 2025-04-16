import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={()=> localStorage.setItem('token','thisistoken')}>Set token</button>
        <button onClick={()=> localStorage.removeItem('token')}>Remove token</button>
    </div>
  )
}
export default Home