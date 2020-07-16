import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginScreen, HomeScreen, GameScreen } from "./pages";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Switch>
        <Route path="/" component={LoginScreen} exact />
        <Route path="/home/:user" component={HomeScreen} exact />
        <Route path="/game/:room/:user" component={GameScreen} exact />
      </Switch>
    </DndProvider>
  );
}

export default App;
