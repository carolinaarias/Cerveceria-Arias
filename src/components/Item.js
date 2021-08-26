const Item = ({data}) => {
   return(
      <li key={data.id}>
         <h2>{data.nombre}</h2>
         <span>{data.precio}</span>
      </li>
   )
}
export default Item;