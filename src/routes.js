import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProdutoScreen from './screens/ProdutoScreen';

const Routes = (props) => {
  return <Switch>
    <Route path={'/produto/:id'} component={ProdutoScreen}></Route>
    <Route path={'/cart'} component={() => <h1>Carte</h1>}></Route>
    <Route path={'/login'} component={() => <h1>Login</h1>}></Route>
    <Route  exact path={'/'} component={HomeScreen}></Route>
  </Switch>
}

export default Routes;