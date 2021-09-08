import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
const ListNav = () => {
   return(
      <div className="row list-nav">
         <ul className="row list-items">
            <li><NavLink to="/category/pizzas">PIZZAS</NavLink></li>
            <li><NavLink to="/category/hamburguesas">HAMBURGUESAS</NavLink></li>
            <li><NavLink to="/category/sanguches">SANGUCHES</NavLink></li>
         </ul>
         <CartWidget/>
      </div>
   )
}
export default ListNav