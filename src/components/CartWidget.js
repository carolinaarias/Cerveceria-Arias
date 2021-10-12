import { Link} from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { context } from "../context/CartContext"

const CartWidget = () => {
   const {carrito} = useContext(context)
   const [cant, setCant] = useState()

   useEffect(()=> {
      if (carrito.length != 0){
         const cants = carrito.map(item => (item.cant))
         const sumCants = cants.reduce((prev, next) => prev + next, 0);
         setCant(sumCants)
      }else{
         setCant(0)
      }
   }, [carrito]);

   return(
      <div className="cart-widget">
        <Link to={'/cart'} className="material-icons cart-icon">shopping_cart</Link> 
        <span>{cant}</span>
      </div>
   )
}
export default CartWidget