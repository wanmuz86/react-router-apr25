import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header style={{backgroundColor:'black', color:'white', textAlign:'center', padding:'16px'}}>
            <h1>My website</h1>
        </header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                {/* to simulate network request a href SSR vs SPA (react router) */}
                {/* <li><a href='/contact'>Contact</a></li> */}
                <li><Link to="/products?category=jewelery&page=1">Jewelery category</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header