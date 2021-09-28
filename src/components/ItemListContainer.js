import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { firestore } from "../firebase";

const ItemListContainer = () => {

   const [products,setProducts]= useState([]);
   const [loading, setLoading] = useState(true)
   const {catid} = useParams()
   
   useEffect(()=> {

      const collection = firestore.collection("products")

      if(catid){
         console.log('entro')
         console.log(catid)
         var show = collection.where('categoria', '==', catid);
      }else{
          var show = collection.where('destacado', '==', true);
          console.log(show)
      }
      show.get().then((response) => {
          if(response.size === 0){
              console.log("No results!");
          }else{
             setProducts(response.docs.map(doc => ({...doc.data(), id:doc.id})))
             setLoading(false)
             console.log('entro 2')
          };
      })
   }, [catid]);

   return(

      <div className="item-container ">
         {loading ?<h1>Cargando, aguarde...</h1> : null}
         <ItemList data={products}/>
      </div>
   )
}
export default ItemListContainer
