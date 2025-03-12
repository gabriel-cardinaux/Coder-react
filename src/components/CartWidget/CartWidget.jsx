import './CartWidget.css'
import { Link } from 'react-router-dom'

export default function CartWidget (){
  return (
<Link to="/cart">
<>
<button className='CartWidget'>
<img className='shopcart'src='src/assets/shopcart.png' alt="shopcart" />
0
</button>
</>
</Link>
  )
}