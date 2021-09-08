import logo from "../multimedia/Holandes Blanco1.png"
import { Link} from "react-router-dom"
const LogoNav = () => {
   return(

      <Link to="/"><img src={logo} className="logo-nav" alt="" /></Link> 

   )
}
export default LogoNav