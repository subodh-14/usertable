import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import AddUsers from "./components/users/AddUsers";
import EditUsers from './components/users/EditUsers';
import Home from './components/Home';

function App() {
  return (
    <Router>
        <div className="App">
        

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/add" component={AddUsers} />
            <Route exact path="/users/edit/:id" component={EditUsers} />
            </Switch>
      </div>
      </Router>
  );
}

export default App;
