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
import Header from './components/Header';
import ClientIndividual from './components/ClientIndividual';
import AdminRegister from './components/AdminRegister';
import styled from "styled-components";
import { backgroundColor } from './Styling';
import AdminPage from './components/AdminPage';

const AppDiv = styled.div `
background:${backgroundColor};
`

function App() {
  return (
    <AppDiv>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/admin-register" component={AdminRegister} />
            <Route path="/admin-login" component={AdminLogin} />
            <Route path="/client-providers" component={ClientProviders} />
            <Route path="/client-main/:provider" component={ClientMain} />
            <Route path="/client-individual/" component={ClientIndividual} />
            <PrivateRoute path="/admin-providers" component={AdminProviders} />
            <PrivateRoute path="/admin-main/:provider" component={AdminMain} />
            <PrivateRoute path ="/admin-individual" component ={AdminIndividual}/> 
            <PrivateRoute path ="/admin-page" component ={AdminPage}/> 
          </Switch>
      </Router>
    </AppDiv>
  );
}

export default App;
