import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home'
import Detail from './components/Detail'
import Form from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path ='/'>
            <Home/>
          </Route>

          <Route exact path ='/todoList/details/:id'>
            <Detail/>
          </Route>

          <Route exact path ='/todoList/add'>
            <Form/>
          </Route>

          <Route exact path ='/todoList/edit/:id'>
            <Form/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
