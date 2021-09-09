import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {

   const [products,setProducts]= useState([]);
   const URL_API_SHOP = "https://mocki.io/v1/63e5758a-600b-4643-bae0-2ad60bb044da";
   const {catid} = useParams()
   useEffect(()=> {
         if (catid==="pizzas"){
            fetch(URL_API_SHOP)
            .then(response => response.json())
            .then(response => {
               const data_find = response.filter(e => e.pizzas)
               setProducts(data_find)
            })
         }else if (catid==="hamburguesas"){
            fetch(URL_API_SHOP)
            .then(response => response.json())
            .then(response => {
               const data_find = response.filter(e => e.hamburguesas)
               setProducts(data_find)
            })
         }else if(catid === "sanguches"){
            fetch(URL_API_SHOP)
            .then(response => response.json())
            .then(response => {
               const data_find = response.filter(e => e.sanguches)
               setProducts(data_find)
            })
         }else{
            fetch(URL_API_SHOP)
            .then(response => response.json())
            .then(response => setProducts(response))}
   }, [catid]);
   return(
      <>
         <div className="item-container row">
            <ItemList data={products}/>
         </div>
      </>
   )
}
export default ItemListContainer


//INTENTO DE USO DE SWITCH EN LUGAR DE IF ELSE...
// switch(id){
//    case id === "pizzas":
//       fetch(URL_API_SHOP)
//       .then((respuesta)=>{
//       const valor_parseado = respuesta.json();
//       return valor_parseado;
//       })
//       .then((data)=>{
//          const data_filtrada = data.filter(elementos => elementos.pizzas)
//          setProducts(data_filtrada)
//       })
//       break;
//    case id === "sanguches":
//       fetch(URL_API_SHOP)
//       .then((respuesta)=>{
//       const valor_parseado = respuesta.json();
//       return valor_parseado;
//       })
//       .then((data)=>{
//          const data_filtrada = data.filter(elementos => elementos.sanguches)
//          setProducts(data_filtrada)
//       })
//       break;
//    case id === "hamburguesas":
//       fetch(URL_API_SHOP)
//       .then((respuesta)=>{
//       const valor_parseado = respuesta.json();
//       return valor_parseado;
//       })
//       .then((data)=>{
//          const data_filtrada = data.filter(elementos => elementos.hamburguesas)
//          setProducts(data_filtrada)
//       })
//       break;
//    default:
//       fetch(URL_API_SHOP)
//       .then((respuesta)=>{
//       const valor_parseado = respuesta.json();
//       return valor_parseado;
//       })
//       .then((data)=>{
//          setProducts(data)
//       })
//       break;
// }