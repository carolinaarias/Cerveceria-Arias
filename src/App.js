import NavBar from "./components/NavBar.js"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer.js"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CustomProvider from "./context/CartContext"
const App = () => {
   return (
      <BrowserRouter>
         <CustomProvider>
            <NavBar/>
            <Switch>
               <Route path="/" component= {ItemListContainer} exact/>
               <Route path="/category/:catid" component= {ItemListContainer}/>
               <Route path="/item/:id" component= {ItemDetailContainer}/>
            </Switch>
         </CustomProvider>
      </BrowserRouter>
   )
};
export default App