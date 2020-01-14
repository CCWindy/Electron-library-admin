import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { default as Book } from './pages/book/book';
import { default as User } from './pages/user/user';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/book">
          <Book />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route extra path="/">
          <Book />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
