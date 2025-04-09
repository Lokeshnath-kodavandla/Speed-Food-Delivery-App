import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import ProductMenu from './components/ProductMenu'

 

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <Home />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
          <Route path="/productMenu/:firmId/:firmName" element={<ProductMenu />} />

      </Routes>
    </div>
  )
}

export default App