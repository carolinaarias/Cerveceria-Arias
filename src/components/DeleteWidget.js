import { context } from "../context/CartContext"
import {  useContext } from "react"

const DeleteWidget = ({data}) => {
   
   const {removeItem} = useContext(context)
   const remove = () => {
      removeItem(data.id)
   }

   return(
      <span className="material-icons icon-delete" onClick={remove}>delete</span>
   )
}
export default DeleteWidget