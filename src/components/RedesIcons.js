import fb from "../multimedia/facebook.svg"
import ig from "../multimedia/instagram (1).svg"
import wp from "../multimedia/whatsapp (1).svg"

const RedesIcons = () => {
   return(
      <div className="row icons-foot">
         <a target="blank" href="https://www.facebook.com/elpuertocervecero/"><img src={fb} className="icon-foot" alt="" /></a>
         <a target="blank" href="https://www.instagram.com/holandeserrantebar/?hl=es-la"><img src={ig} className="icon-foot" alt="" /></a>
         <a target="blank" href="https://api.whatsapp.com/send?phone=5491123800654&text=Hola!%20Quiero%20hacer%20un%20pedido."><img src={wp} className="icon-foot" alt="" /></a>
      </div>
   )
}
export default RedesIcons