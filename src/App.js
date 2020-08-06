import React from 'react';
import { Provider } from "react-redux";
import store from './rematch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './assets/css/index.css';

import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
