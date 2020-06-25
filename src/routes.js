import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Produtos from './pages/Produtos';

function Routes(){
     return(
      <BrowserRouter>
         <Switch>
             <Route path = "/" exact component={Main}/>
             <Route path = "/produtos" exact component={Produtos}/>
         </Switch>
      </BrowserRouter>

     );
};

export default Routes;