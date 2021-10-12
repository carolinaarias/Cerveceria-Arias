import RedesIcons from "./RedesIcons";

const Footer = () => {
   return(
      <footer className="row">
         <div className="footer-info">
            <h4>Villa Urquiza</h4>
            <p>Pedro Ignacio Rivera 4700</p>
            <span>Martes a Domingos 18.30 a 00 hs</span> <br />
            <span>Viernes y Sabados hasta las 02 hs</span>
         </div>
         <RedesIcons/>

      </footer>
   )
}
export default Footer;