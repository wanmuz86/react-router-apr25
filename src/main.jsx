import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import ProductList from './pages/ProductList.jsx'

const routes = createBrowserRouter([
  {
    path: '/', // Everything that starts with /
    element: <App />, // Will be rendered based on layout in App component
    children: [
      // Defining the route and which components to render
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path:'/products',
        element:<ProductList/>,
      },
      {
        path:'/products/:productId', // :productId is a dynamic route that we give name
        element:<Product/>
      }
      // TODO 404 page
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
