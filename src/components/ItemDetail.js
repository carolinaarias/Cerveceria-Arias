import ItemCount from "./ItemCount"
import { useState } from "react"

const ItemDetail = ({data}) => {

   const [buttonAdd,setButton] = useState('add')
   const onAdd = (cantidad)=>{
      addAlert(cantidad)
      setButton('cart')
   }
   const addAlert = (cantidad)=>{
      alert(cantidad + " x " + data.nombre)
   }

   return(
      <li key={data.id}>
         <img src={data.img} className="img-detail"/>
         <h2>{data.nombre}</h2>
         <span>$ {data.precio}</span>
         <p>{data.descripcion}</p>
         <ItemCount initial={1} stock={5} onAdd={onAdd} buttonAdd={buttonAdd} /> 
      </li>
   )
}
export default ItemDetail;