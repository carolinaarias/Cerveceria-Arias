import CartWidget from "./CartWidget"
const ListNav = () => {
   return(
      <div className="row list-nav">
         <ul className="row list-items">
            <li><a href="#">HOME</a></li>
            <li><a href="#">NOSOTROS</a></li>
            <li><a href="#">CERVEZAS</a></li>
            <li><a href="#">CARTA</a></li>
            <li><a href="#">ENCONTRANOS</a></li>
         </ul>
         <CartWidget/>
      </div>
   )
}
export default ListNav