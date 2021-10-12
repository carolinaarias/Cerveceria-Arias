import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { context } from "../context/CartContext"
import { Link} from "react-router-dom"

const ItemDetail = ({data}) => {

   const {addItem} = useContext(context)

   const [buttonAdd,setButton] = useState('add')   

   const onAdd = (cant)=>{
      const newData = {...data, cant}
      addItem(newData,cant)
      setButton('cart')
   }

   return data == null ?(
      <h1>Cargando, aguarde...</h1>
   ) : (

      <li key={data.id} className="detail-item_container row">
         <img src={data.img} className="img-detail"/>
         <div className="detail-info">
            <h2 className="detail-title">{data.nombre}</h2>
            <p>{data.descripcion}</p>
            <span>$ {data.precio}</span>
            <div className="btns">
               {  
                  buttonAdd === 'add' ?
                  <ItemCount initial={1} data={data} onAdd={onAdd}/> 
                  :
                  <div className="column detail-btns">
                     <Link to={'/cart'} ><button className="btn-agregar btn-inverse">Ir a Carrito</button></Link>
                     <Link to={'/'} ><button className="btn-agregar">Seguir comprando</button></Link>
                  </div>
               }
            </div>
         </div>
      </li>
   )
}
export default ItemDetail;