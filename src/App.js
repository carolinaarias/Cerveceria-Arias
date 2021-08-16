import ItemListContainer from "./components/ItemListContainer.js"
import NavBar from "./components/NavBar.js"
const App = () => {
   return (
      <>
         <NavBar/>
         <ItemListContainer nombre="Carolina" apellido="Arias" />
      </>
   )
};
export default App