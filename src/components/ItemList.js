import Item from "./Item"

const ItemList = ({data}) => {
   return data.length === 0 ?(
      <h1>cargando, aguarde...</h1>
   ) : (
      <ul>
         {data.map((elemento) =>(
            <Item data={elemento} />
         ))}
      </ul>
   ) 
}
export default ItemList