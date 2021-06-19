import './Formacion.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect,
    
  } from "react-router-dom";

function Formacion() {
  return (
    <section>
        <div id="shoja">
        <h2>FORMACION ACADEMICA</h2>
        <div className="cuadro">
            
            <h3>Tecnico en desarrollo front end</h3>
            <h4>Kuepa edu-tech 2021</h4>
            <p>Logica de programacio(algoritmia), lenguaje html, css, java-script, diseño ux, 
                react js, wireframes, manejo de bases de datos.</p>
            <hr></hr>
            
            <h3>Adobe ilustrator</h3>
            <h4>Crehana-2020</h4>
            <hr></hr>
            
            <h3>Proeficencia en ingles-nivel intermedio</h3>
            <h4>Universidad de buenos aires</h4>
            

        </div>
        <h2>EXPERIENCIA LABORAL</h2>
        <div className="cuadro">
        
            <h3>Surfeando dinosaurios-Productora audiovisual</h3>
            <h4>Bogota-Colombia</h4>
            <h4>Noviembre 2019-Septiembre 2020</h4>
            <h4>Cargo: Asistente de arte</h4>
            <h4>Responsable:Esteban flores</h4>
            <h4>Contacto: +057 317 3350896 </h4>
        <hr></hr>
            
            <h3>Hierbabuena eventos</h3>
            <h4>Buenos aires-Argentina</h4>
            <h4>julio 2018-Enero 2019</h4>
            <h4>Cargo: Fotografa</h4>
            <h4>Responsable: Marcelo colvalan</h4>
            <h4>Contacto:+054 1123102563</h4>
             

        </div>
       
        </div>
        <NavLink to="/formacion" activeClassName="active1" className="button3"><p className="boton3"><strong>FORMACION Y EXPERIENCIA</strong></p>
        
        </NavLink>
        
    </section>
   
  );
}

export default Formacion;