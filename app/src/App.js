import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginScreen } from "./screens";
import { DndProvider } from "react-dnd";
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

import './global.css'

function App() {
  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <Switch>
        <Route path="/" component={LoginScreen} exact />
      </Switch>
    </DndProvider>
  );
}

export default App;