import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/AdminLogin';
import AdminProviders from './components/AdminProviders';
import AdminMain from './components/AdminMain';
import AdminIndividual from './components/AdminIndividual';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/admin-login" component={AdminLogin} />
        <PrivateRoute path="/admin-providers" component={AdminProviders} />
        <PrivateRoute path="/admin-main/:provider" component={AdminMain} />
        <PrivateRoute path="/admin-individual/:id" component={AdminIndividual} />
      </Switch>
    </Router>
  );
}

export default App;
