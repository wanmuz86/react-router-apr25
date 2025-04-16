
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      {/* refer to the child component defined in route */}
      <Outlet/> 
      <Footer/>
    </>
  )
}

export default App
