import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const ListNav = () => {
   return(
      <div className="row list-nav">
         <ul className="row list-items">
            <li><NavLink to="/category/1">PIZZAS</NavLink></li>
            <li><NavLink to="/category/3">HAMBURGUESAS</NavLink></li>
            <li><NavLink to="/category/2">SANGUCHES</NavLink></li>
         </ul>
         <CartWidget/>
      </div>
   )
}
export default ListNav