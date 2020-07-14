import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { LoginScreen, HomeScreen, GameScreen } from './pages'



function App() {
  return (
    <Switch>
      <Route path="/" component={LoginScreen} exact />
      <Route path="/home/:user" component={HomeScreen} exact />
      <Route path="/game/:user" component={GameScreen} exact />
    </Switch>
  );
}

export default App;
