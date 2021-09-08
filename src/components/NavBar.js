import ListNav from "./ListNav"
import LogoNav from "./LogoNav"

const NavBar = () => {
   return(
         <header className="fixed">
            <nav className="row">
               <LogoNav/>
               <ListNav/>
            </nav>
         </header>
   )
}
export default NavBar