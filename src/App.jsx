import './App.css'
import ItemListContainer from '/src/components/ItemListContainer/ItemListContainer'
import NavBar from '/src/components/NavBar/NavBar'
import CartWidget from '/src/components/CartWidget/CartWidget'
import ItemDetail from './components/ItemDetail/ItemDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route exact path='/' element={<ItemListContainer greeting='Welcome to the BookShop'/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/Item/:itemId' element={<ItemDetail/>}/>
      <Route path='/cart' element={<CartWidget/>}/>
      <Route path='*' element={<h1>Error 404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
