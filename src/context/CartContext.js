import { createContext, useState } from "react";

export const context = createContext([]);

const {Provider} = context

const CustomProvider = ({children}) => {
   
   const [carrito, setCarrito]=useState([])

   const setCart = () => {
      setCarrito([...carrito])
   }

   const addItem = (product,contador) => {
      if(isInCart(product.id)){
         const oldProd = isInCart(product.id)
         oldProd.cant = oldProd.cant + contador 
         setCarrito([...carrito])
         
      }else{
         setCarrito([...carrito, product])
      }
   }
      
   const removeItem = (itemId) => {
      const newCarrito = carrito.filter(product => product.id != itemId )
      setCarrito(newCarrito)
   }

   const clear = () => {
      setCarrito([])
   }
   const isInCart = (itemId) =>{
      return carrito.find(product => product.id === itemId)
   }


   const localContext = {
      context,
      addItem,
      removeItem,
      clear,
      carrito,
      setCart,
      isInCart
   }

return(
   <Provider value = {localContext}>
      {children}
   </Provider>
)

}
export default CustomProvider