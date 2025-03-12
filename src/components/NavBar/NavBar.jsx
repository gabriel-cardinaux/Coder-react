import CartWidget from '/src/components/CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar(){

  return (
    <>
    <nav className='NavBar'>
    <Link to="/">
    <h1>BookShop</h1>
    </Link>
    <ul>
        <li><Link to={"/category/English"}>English </Link></li>
        <li><Link to={"/category/French"}>French</Link></li>
        <li><Link to={"/category/Portuguese"}>Portuguese</Link></li>
    </ul>
    <CartWidget/>
    </nav>
    
    </>
  )
}