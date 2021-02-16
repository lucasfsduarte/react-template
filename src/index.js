import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import Tela1 from './components/Tela1';
import Tela2 from './components/Tela2';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// ========================================

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/tela1">
            <Tela1></Tela1>
          </Route>
          <Route path="/tela2">
            <Tela2></Tela2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);