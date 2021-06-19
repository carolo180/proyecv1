import './Perfil.css'
import linkedin from './linkedin1.svg';
import git from './git1.png';
import guru from './guru2.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  
} from "react-router-dom";

function Perfil() {
  return (
    <section>
    <div id="home">
      <div className="primer">
          <h4>ACERCA DE MI</h4>
          <p>Considero ser una persona de carácter innovador, creativo y analítico, con aptitudes de liderazgo
               y una alta capacidad de resolución, me apasiona el diseño y la tecnología y busco potenciar mi 
               experiencia y conocimientos en dichas áreas. Cabe destacar una amplia experiencia en servicio al cliente
                y ventas, por tal razón se me facilita la interacción y negociación en los grupos de trabajo, 
                además de poseer asertividad en la comunicación con clientes.</p>
           <div className="iconos">
               <a href="https://www.linkedin.com/in/carolina-loaiza-40631a215/"><img src={linkedin} className="l" alt="logo" /></a>
               <a href="https://github.com/carolo180?tab=repositories"><img src={git} className="g" alt="logo" /></a>
               
               <div className="insta">
               <a href="https://www.instagram.com/loaizacarolina/"><i class="fab fa-instagram-square fa-2x"></i></a>
               <a href="https://www.facebook.com/carolina.loaiza.7509/"><i class="fab fa-facebook-square fa-2x" ></i></a>
               </div>
            
           </div>
        </div>
      <div className="segundo">
          <h4>HABILIDADES</h4>
          <div className="barras">
            
            <div className="info"><strong>Html</strong><progress max="100" value="70" className="barr1"> </progress></div>
            <div className="info"><strong>Css </strong><progress max="100" value="70" className="barr2"> </progress></div>
            <div className="info"><strong>Js </strong><progress max="100" value="50" className="barr3"> </progress></div>
            <div className="info"><strong>Ux </strong><progress max="100" value="40" className="barr4"> </progress></div> 
            <div className="info"><strong>Ai </strong> <progress max="100" value="60" className="barr5"> </progress></div> 
          </div>
          <h4>IDIOMAS</h4>
          
          <div className="lengua"><h3>Ingles</h3> <p>Proeficencia intermedia</p></div>
          <div className="lengua"><h3>Portugues</h3> <p>Proeficencia basica</p></div>
          <div className="lengua"><h3>Español</h3> <p>Lengua nativa</p></div>

          

      </div>
      <Link to="/formacion">
      <button className="button2"><p className="boton2"><strong>FORMACION Y EXPERIENCIA</strong></p></button>
      </Link>
     
    </div>  
      <footer>
        <h4>INTERESES :</h4>
        <div id="pie">
        <div className="fotog"><img src={guru} className="gur" alt="logo" /><p>Mindfullnes</p></div>
        <div className="fotog"><i class="fas fa-camera-retro fa-2x"></i><p>Fotografia</p></div>
        <div className="fotog"><i class="fas fa-image fa-2x"></i><p>Naturaleza</p></div>
        <div className="fotog"><i class="fas fa-hiking fa-2x"></i><p>Wanderlust</p></div>
        <div className="fotog"><i class="fas fa-book-open fa-2x"></i><p> Literatura</p></div>
        </div>
      </footer>
    </section>  
                          
           
  );
}

export default Perfil;