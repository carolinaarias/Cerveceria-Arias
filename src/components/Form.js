import { context } from "../context/CartContext"
import {  useContext, useState } from "react"
import { firestore } from "../firebase";

const Form = () => {
   const {carrito, clear} = useContext(context)
   const [nombre, setNombre] = useState("")
   const [email, setEmail] = useState("")
   const [cel, setCel] = useState()
   const [direccion, setDireccion] = useState("")

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
      query.then(()=>{console.log("Pedido realizado")})
      clearAll()
   }
   const clearAll = () => {
      clear()
      confir()

   }
   const confir = () => {
      alert(nombre + ' tu pedido se ha realizado con exito!')
   }
   return(
      <div className="item-container column">
         <h1>Tus datos</h1>
         <input type="text" onChange={saveName} placeholder="Nombre"/>
         <input type="text" onChange={saveEmail} placeholder="Email"/>
         <input type="text" onChange={saveCel} placeholder="Cel"/>
         <input type="text" onChange={saveDirec} placeholder="Direccion"/>
         <button onClick={sendForm}>Finalizar Compra</button>
      </div>
   )
}

export default Form