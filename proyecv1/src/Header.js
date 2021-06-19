import caro from './foto2.jpeg';

import './Header.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  
} from "react-router-dom";


function Header() {
  return (
    <header>
      <div className="foto">
        <div>
         <img src={caro} className="pic" alt="logo" />
         </div>
           <div className="parra">
            <h1>Carolina<br></br> Loaiza </h1>
            <h4>Desarrollador front-end junior</h4>
            <ul>
              <li><p><i class="fas fa-phone-alt"></i> +57 3044531854</p></li>
              <li><p><i class="fas fa-envelope"></i> caponeris1@gmail.com</p></li>
              <li><p><i class="fas fa-map-marker-alt"></i> Bogota-Colombia</p></li>
            </ul>  
           
           </div>
           <NavLink to="/perfil" activeClassName="active1" className="button"><p className="boton">PERFIL PROFESIONAL</p>
           
           </NavLink>
          
      </div>
         
           
         
       
        
    </header>
   
  );
}

export default Header;