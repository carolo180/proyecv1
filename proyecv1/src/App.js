import './App.css';
import Header from './Header'
import Perfil from './Perfil'
import Formacion from './Formacion'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <switch>
              
            <Route path="/perfil" >
              <Perfil />
            </Route>
            <Route  path="/formacion" sensitive>
             <Formacion />
            </Route>
            <Route exact path="/" render={() =>(<Redirect to="/perfil" />)}>

            </Route>
         
      
          </switch>
        </div>
      
     
      </Router>
    </div>
  );
}

export default App;

