import ItemCount from "./ItemCount";
import DeleteWidget from "./DeleteWidget";
import { useContext } from "react"
import { context } from "../context/CartContext"

const ItemCart = ({data}) =>{

   const {isInCart, setCart} = useContext(context)

   const updateCant = (contador) =>{
      const prod = isInCart(data.id)
      prod.cant = contador
      setCart()
   }

   return (
      <>
      <li className="cart-item_container row">
         <div className="row cart-info">
            <img src={data.img} className="img-cart"/>
            <div className="column">
               <h2>{data.nombre}</h2>
               <span>$ {data.precio}</span>
            </div>
         </div>
         <div className="row cart-components">
            <div className="cart-counter"><ItemCount initial={data.cant} data={data} updateCant={updateCant} cart={true}/></div>
            <DeleteWidget data={data}/>
         </div>
      </li>
      </>
   )
}
export default ItemCart;