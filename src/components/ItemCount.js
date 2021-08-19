import {useState} from "react";
const ItemCount = ({initial,stock,onAdd}) => {

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
         <button className="btn-agregar" disabled={stock > 0 ? false : true} onClick={agregar}>Agregar Carrito</button>
      </div>
   )
}
export default ItemCount;