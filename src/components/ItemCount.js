import {useState} from "react";

const ItemCount = ({initial,data,onAdd,cart,updateCant}) => {

   let [contador, setContador] = useState(initial);
   const sumar = () => {
      if(contador < data.stock){
         setContador(contador + 1)
      }
   }
   const restar = () => {
      if(contador > 1){
         setContador(contador - 1)
      }
   }
   const agregar = () => {
      if(data.stock > 0){
         onAdd(contador)
      }
   }
   const update = () => {
      updateCant(contador)
   }

   return(
      <div className="column btns">
         <div className="row">
            <button className="btn-mas" onClick={sumar}>+</button>
            <p>{contador}</p>
            <button className="btn-menos" onClick={restar}>-</button>
         </div>
         {
            cart === true ?
            <button className="btn-agregar"  onClick={update}>Actualizar </button> 
            :
            <button className="btn-agregar" disabled={data.stock > 0 ? false : true} onClick={agregar}>Agregar Carrito</button>
         }

      </div>
   )
}
export default ItemCount;