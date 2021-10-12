import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const ListNav = () => {
   return(
      <div className="row list-nav">
         <ul className="row list-items">
            <li><NavLink to="/category/Pizzas">PIZZAS</NavLink></li>
            <li><NavLink to="/category/Hamburguesas">HAMBURGUESAS</NavLink></li>
            <li><NavLink to="/category/Sanguches">SANGUCHES</NavLink></li>
         </ul>
         <CartWidget/>
      </div>
   )
}
export default ListNav