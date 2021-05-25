import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home.js'

function Routes(){
       return(
       
              <BrowserRouter>
                     <Switch>
                            <Route exact path="/" component={Home}/>;
                            <Route exact path="/teste" component={Home}/>;
                     </Switch>
              </BrowserRouter>

       );
}

export default Routes;