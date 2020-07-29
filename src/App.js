import React from 'react';
import { Provider } from "react-redux";
import store from './rematch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './assets/css/index.css';

import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
