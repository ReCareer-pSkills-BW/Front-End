import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/AdminLogin';
import AdminProviders from './components/AdminProviders';
import AdminMain from './components/AdminMain';
import AdminIndividual from './components/AdminIndividual';
import ClientProviders from './components/ClientProviders';
import ClientMain from './components/ClientMain';
import ClientIndividual from './components/ClientIndividual';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/client-providers" component={ClientProviders} />
        <Route path="/client-main/:provider" component={ClientMain} />
        <Route path="/client-individual/:id" component={ClientIndividual} />
        <PrivateRoute path="/admin-providers" component={AdminProviders} />
        <PrivateRoute path="/admin-main/:provider" component={AdminMain} />
        <PrivateRoute path="/admin-individual/:id" component={AdminIndividual} />
      </Switch>
    </Router>
  );
}

export default App;
