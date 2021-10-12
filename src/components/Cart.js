import { context } from "../context/CartContext"
import {  useContext, useEffect, useState } from "react"
import { Link} from "react-router-dom"
import ItemCart from "./ItemCart"

const Cart = () =>{

   const {carrito,  clear} = useContext(context)
   const [total, setTotal] = useState()

   const clearAll = () => {
      clear()
   }

   useEffect(()=> {
      if (carrito.length != 0){
         const prices = carrito.map(item => (item.precio * item.cant))
         const sumPrices = prices.reduce((prev, next) => prev + next, 0);
         setTotal(sumPrices)
      }   
   }, [carrito]);


   return carrito.length === 0 ?(
      <div className="item-container column cart-vacio">
         <h1>No hay productos en el carrito.</h1>
         <Link to={'/'} ><button className="btn-agregar btn-inverse">Volver a inicio </button></Link>
      </div>
   ) : (
      <div  className="item-container">
         <div className="cart">
            <h1>Tu orden</h1>
            <ul className="column">
               {carrito.map((data) =>(
                  <ItemCart data={data}/>
               ))}
            </ul>
         </div>
         <div className = "row cart-footer">
            <div className= "row cart-footer_btns">
               <button className="btn-agregar btn-vaciar" onClick={clearAll}>Vaciar Carrito</button>
               <Link to={'/'} ><button className="btn-agregar btn-seg">Seguir comprando </button></Link>
            </div>
            <div className = "row cart-footer_tot">
               <p>TOTAL = $ {total}</p>
               <Link to={'/form'}><button className="btn-agregar btn-inverse">Siguiente</button></Link>
            </div>
         </div>
      </div>
   ) 
   
}

export default Cart;