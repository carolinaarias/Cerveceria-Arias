import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import Footer from "./Footer";
import { toast, ToastContainer,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ItemDetailContainer = () => {

   const [products,setProducts]= useState({});
   const [loading, setLoading] = useState(true)
   const {id} = useParams();

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
      const item = collection.doc(id)
      item.get()
          .then((doc)=>{
             setProducts({ id:doc.id,...doc.data() })
          })
          .catch(()=>{
             alert("Recarga la pagina")
          })
          .finally(
            setLoading(false)
         )
   }, [id]);
   return(
      <>
         <div className="item-container row">
            {loading ? <ToastContainer /> : <ItemDetail data={products}/>}
         </div>
         <Footer/>
      </>
   )
}
export default ItemDetailContainer

