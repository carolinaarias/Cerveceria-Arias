import Item from "./Item"

const ItemList = ({data}) => {
   console.log(data.length)
   return data.length === 0 ?(
      <h1>Cargando, aguarde...</h1>
   ) : (
      <ul className="row">
         {data.map((elemento) =>(
            <Item data={elemento} />
         ))}
      </ul>
   ) 
}
export default ItemList