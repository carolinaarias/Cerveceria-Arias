import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

   const [products,setProducts]= useState({});
   const URL_API_SHOP = "https://mocki.io/v1/cf9f5cc3-6b8c-4cd6-8a63-7013b66833cb";
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


















