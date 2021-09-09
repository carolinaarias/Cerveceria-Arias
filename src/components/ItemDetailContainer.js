import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

   const [products,setProducts]= useState({});
   const URL_API_SHOP = "https://mocki.io/v1/63e5758a-600b-4643-bae0-2ad60bb044da";
   const {id} = useParams();
   useEffect(()=> {
      fetch(URL_API_SHOP)
      .then(response => response.json())
      .then(response => {
         const data_find = response.filter((p) => p.id === parseInt(id))
         setProducts(...data_find)
      })
      
   }, [id]);
   return(
      <>
         <div className="item-container row">
            <ItemDetail data={products}/>
         </div>
      </>
   )
}
export default ItemDetailContainer


















