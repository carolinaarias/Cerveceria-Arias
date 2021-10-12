import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { firestore } from "../firebase";
import Footer from "./Footer";
import { Flip, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ItemListContainer = () => {

   const [products,setProducts]= useState([]);
   const [loading, setLoading] = useState(true)
   const {catid} = useParams()

   toast.info('Cargando aguarde...', {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      transition:Flip,
   });

   useEffect(()=> {

      const collection = firestore.collection("products")

      if(catid){
         var id = catid.toLowerCase()
         var show = collection.where('categoria', '==', id);
      }else{
          var show = collection.where('destacado', '==', true);
      }
      show.get().then((response) => {
          if(response.size === 0){
              alert("Intenta de nuevo");
          }else{
             setProducts(response.docs.map(doc => ({...doc.data(), id:doc.id})))
             setLoading(false)
          };
      })
   }, [catid]);

   return(
      <>
         
         <div className="item-container ">
            {loading ? 
                        <ToastContainer/>
                     : 
                        <div>
                           <h1>{catid ? catid : 'Destacados'}</h1>
                           <ItemList data={products}/>
                        </div>
            }
         </div>
         <Footer/>
      </>
   )
}
export default ItemListContainer
