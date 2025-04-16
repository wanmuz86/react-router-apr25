import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const routes = createBrowserRouter([
  // Defining the route and which components to render
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element:<About/>
  },
  {
    path: '/contact',
    element:<Contact/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
