import {useState} from "react";
import { Link} from "react-router-dom"

const ItemCount = ({initial,stock,onAdd,buttonAdd}) => {

   let [contador, setContador] = useState(initial);
   const sumar = () => {
      if(contador < stock){
         setContador(contador + 1)
      }
   }
   const restar = () => {
      if(contador > 1){
         setContador(contador - 1)
      }
   }
   const agregar = () => {
      if(stock > 0){
         onAdd(contador)
      }
   }

   return(
      <div className="column btns">
         <div className="row">
            <button className="btn-mas" onClick={sumar}>+</button>
            <p>{contador}</p>
            <button className="btn-menos" onClick={restar}>-</button>
         </div>
         {
            buttonAdd === 'add' ?
               <button className="btn-agregar" disabled={stock > 0 ? false : true} onClick={agregar}>Agregar Carrito</button>
            :
               <><Link to={'/cart'} ><button className="btn-agregar">Ir a Carrito</button></Link>
               <Link to={'/'} ><button className="btn-agregar">Seguir comprando</button></Link></>
         }
      </div>
   )
}
export default ItemCount;