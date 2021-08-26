import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

   const [products,setProducts]= useState([]);
   const URL_API_SHOP = "https://mocki.io/v1/b781c633-6251-45cc-95ca-b3a68ef46659";

   useEffect(()=> {
      fetch(URL_API_SHOP)
      .then((respuesta)=>{
         const valor_parseado = respuesta.json();
         return valor_parseado;
      })
      .then((data)=>{
         const data_filtrada = data.find(elemento => elemento.id === 3)
         setProducts(data_filtrada)
      })
   }, []);
   return(
      <>
         <div className="item-container">
            <ItemDetail data={products}></ItemDetail>
         </div>
      </>
   )
}
export default ItemDetailContainer


















