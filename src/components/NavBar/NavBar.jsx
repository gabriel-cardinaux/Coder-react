import CartWidget from '/src/components/CartWidget/CartWidget'
import './NavBar.css'

export default function NavBar(){

  return (
    <>
    <nav className='NavBar'>
    <h1>BookShop</h1>
    <ul>
        <li>English</li>
        <li>French</li>
        <li>Portuguese</li>
    </ul>
    <CartWidget/>
    </nav>
    
    </>
  )
}