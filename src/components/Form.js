import { context } from "../context/CartContext"
import {  useContext, useState } from "react"
import { firestore } from "../firebase";
import { Link} from "react-router-dom"

const Form = () => {
   const {carrito, clear} = useContext(context)
   const [nombre, setNombre] = useState("")
   const [email, setEmail] = useState("")
   const [cel, setCel] = useState("")
   const [direccion, setDireccion] = useState("")
   const [validar, setValidar] = useState(false)
   const [submit, setSubmit] = useState(false)

   const saveName = (e) => {
      setNombre(e.target.value)
   }
   const saveEmail = (e) => {
      setEmail(e.target.value)
   }
   const saveCel = (e) => {
      setCel(e.target.value)
   }
   const saveDirec = (e) => {
      setDireccion(e.target.value)
   }

   const sendForm = () => {
      const collection = firestore.collection("pedidos")
      const user = {
         nombre,
         email,
         cel,
         direccion
      }
      const pedido = {
         user,
         carrito
      }
      const query = collection.add(pedido)
      clearAll()
   }
   const clearAll = () => {
      clear()
      confir()
   }
   const confir = () => {
      setSubmit(true)
   }
   const onSubmit = (e) =>{
      e.preventDefault();
      if(
         nombre.length < 2 ||
         email.length == 0 ||
         cel.length < 10 ||
         direccion.length == 0
      ){
         setValidar(true)
      }else{
         sendForm();
         setValidar(false)
      }
   }

   return(
      <div className="item-container column">
         <div className="form">
            {
               submit ? 
               <div className="column">
                  <h2>{nombre} tu pedido se ha realizado con exito!</h2>
                  <p>Enviaremos tu pedido a : {direccion}</p>
                  <span>Nos comunicamos al : {cel}</span>
                  <Link to={'/'} ><button className="btn-agregar btn-inverse">Volver a inicio </button></Link>
               </div>

               :
               <div>
                  <h1>Tus datos</h1>
                  {validar ? <h3>Revisa los campos, encontramos un error...</h3> : null}
                  <form onSubmit={onSubmit}>
                     <label className="column">
                        Nombre
                        <input type="text" name="nombre" onChange={saveName} placeholder="Carlos"/>
                     </label>
                     <label className="column">
                        Email
                        <input type="text" name="email" onChange={saveEmail} placeholder="carlos@email.com"/>
                     </label>
                     <label className="column">
                        Celular
                        <input type="text" name="celular" onChange={saveCel} placeholder="01112345678"/>
                     </label>
                     <label className="column">
                        Direccion
                        <input type="text" name="direccion" onChange={saveDirec} placeholder="Calle 1234"/>
                     </label>
                     <input className="btn-agregar btn-inverse submit" type="submit" value="Finalizar Compra" />
                  </form>
               </div>
            }
         </div>
      </div>
   )
}

export default Form