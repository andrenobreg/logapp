import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home.js';
import Teste from './teste.js';

function Routes(){
       return(
       
              <BrowserRouter>
                     <Switch>
                            <Route exact path="/" component={Home}/>;
                            <Route exact path="/teste" component={Teste}/>;
                     </Switch>
              </BrowserRouter>

       );
}

export default Routes;