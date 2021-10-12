import Item from "./Item"
const ItemList = ({data}) => {
   return (
      <>
         <ul className="row">
            {data.map((elemento) =>(
               <Item data={elemento} />
            ))}
         </ul>
      </>
   ) 
}
export default ItemList