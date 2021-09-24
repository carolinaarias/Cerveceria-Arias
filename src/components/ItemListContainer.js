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
      const query = collection.get()
      // if(catid == null){
      //    const query = collection.get()
      // }else{
      //    const query = collection.where('categoria','==',catid)
      //    query.get()
      // }
      console.log(catid)
      console.log(query)
      query
         .then((snapshot)=>{
            const docs = snapshot.docs
            setProducts(docs.map(doc => ({...doc.data(), id: doc.id})))

         })
         .catch((error)=>{
            console.log(error)
         })
         .finally(
            setLoading(false)
         )
   }, [catid]);

   return(

      <div className="item-container ">
         {loading ?<h1>Cargando, aguarde...</h1> : null}
         <ItemList data={products}/>
      </div>
   )
}
export default ItemListContainer
