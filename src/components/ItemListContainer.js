import ItemCount from "./ItemCount"

const ItemListContainer = () => {
   return(
         <div className="item-container">
            <ItemCount initial={1} stock={5} onAdd={(cantidad) => {console.log(cantidad)}} />
         </div>
   )
}
export default ItemListContainer