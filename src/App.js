import NavBar from "./components/NavBar.js"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer.js"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CustomProvider from "./context/CartContext"
import Cart from "./components/Cart.js"
const App = () => {
   return (
      <BrowserRouter>
         <CustomProvider>
            <NavBar/>
            <Switch>
               <Route path="/" component= {ItemListContainer} exact/>
               <Route path="/category/:catid" component= {ItemListContainer}/>
               <Route path="/item/:id" component= {ItemDetailContainer}/>
               <Route path="/cart" component= {Cart}/>
            </Switch>
         </CustomProvider>
      </BrowserRouter>
   )
};
export default App