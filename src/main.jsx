import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Product from './Pages/Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <About/>
    <Product/>
  </StrictMode>,
)
