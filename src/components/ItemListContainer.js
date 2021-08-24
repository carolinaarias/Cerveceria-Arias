import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

   const [products,setProducts]= useState([]);
   useEffect(()=> {
      fetch("https://mocki.io/v1/51fa736a-702b-47d4-9b50-1dde998b7b70")
      .then((respuesta)=>{
         const valor_parseado = respuesta.json();
         return valor_parseado;
      })
      .then((data)=>{
         console.log(data)
         setProducts(data)
      })
   }, []);
   return(
      <>
         <div className="item-container">
            <ItemList data={products}></ItemList>
         </div>
      </>
   )
}
export default ItemListContainer