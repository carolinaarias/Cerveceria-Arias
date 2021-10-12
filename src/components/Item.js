import { Link} from "react-router-dom"
const Item = ({data}) => {
   return(
      <li key={data.id} className="list-item_container column">
         <img src={data.img} className="img-inicio"/>
         <span>$ {data.precio}</span>
         <Link to={'/item/' + data.id} className="btn-vermas" >Ver mas</Link>
      </li>
   )
}
export default Item;