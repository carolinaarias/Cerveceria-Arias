import { Link} from "react-router-dom"
const Item = ({data}) => {
   return(
      <li key={data.id} className="list-item_container">
         <h2>{data.nombre}</h2>
         <span>{data.precio}</span>
         <Link to={'/item/' + data.id} >Ver mas</Link>
      </li>
   )
}
export default Item;