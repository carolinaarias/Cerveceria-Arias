import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";

const ItemDetailContainer = () => {

   const [products,setProducts]= useState({});
   const [loading, setLoading] = useState(true)
   const {id} = useParams();

   useEffect(()=> {
      const collection = firestore.collection("products")
      const item = collection.doc(id)
      console.log(item)
      item.get()
          .then((doc)=>{
             setProducts({ id:doc.id,...doc.data() })
          })
          .catch((error)=>{
             console.log(error)
          })
          .finally(
            setLoading(false)
         )
   }, [id]);
   return(
      <div className="item-container row">
         {loading ?<h1>Cargando, aguarde...</h1> : null}
         <ItemDetail data={products}/>
      </div>
   )
}
export default ItemDetailContainer


