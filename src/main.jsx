import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product, { dataLoader } from './pages/Product.jsx'
import ProductList from './pages/ProductList.jsx'
import Error from './pages/Error.jsx'
import ProductError from './pages/ProductError.jsx'

// Import function loaders from ProductList
import { loaders } from './pages/ProductList.jsx';
import CreateProduct, { createProduct } from './pages/CreateProduct.jsx'

const routes = createBrowserRouter([
  {
    path: '/', // Everything that starts with /
    element: <App />, // Will be rendered based on layout in App component
    errorElement:<Error/>, // ALl the errors coming from / and it's children will be catch here
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
        loader:loaders  // 2) Before the page is loaded, the function loaders will be executed   
      },
      {
        path:'/products/:productId', // :productId is a dynamic route that we give name
        element:<Product/>,
        loader:dataLoader, // 2)
        errorElement:<ProductError/> // For product, the error will be caught here
      },
      {
        path:'/create-product',
        element:<CreateProduct/>,
        action:createProduct
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
