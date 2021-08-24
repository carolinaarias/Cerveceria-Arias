import ItemCount from "./ItemCount";
const Item = ({data}) => {
   return(
      <li key={data.id}>
         <img src={data.img} alt="" />
         <h2>{data.nombre}</h2>
         <span>{data.precio}</span>
         <p>{data.descripcion}</p>
         <ItemCount initial={1} stock={5} onAdd={(cantidad) => {console.log(cantidad + " x " + data.nombre)}} />
      </li>
   )
}
export default Item;