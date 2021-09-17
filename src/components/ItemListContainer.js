import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {

   const [products,setProducts]= useState([]);
   const URL_API_SHOP = "https://mocki.io/v1/cf9f5cc3-6b8c-4cd6-8a63-7013b66833cb";
   const {catid} = useParams()
   
   useEffect(()=> {
      if(catid == null){
         fetch(URL_API_SHOP)
         .then(response => response.json())
         .then(response => {setProducts(response)})
      }else{
         fetch(URL_API_SHOP)
         .then(response => response.json())
         .then(response => {
            const data_find = response.filter(prod => prod.categoria === catid)
            setProducts(data_find)
         })
      }
   }, [catid]);

   return(
      <>
         <div className="item-container ">
            <ItemList data={products}/>
         </div>
      </>
   )
}
export default ItemListContainer

