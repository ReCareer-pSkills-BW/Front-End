import React from 'react';
import './App.css';
import ClientMain from './components/ClientMain';
import AdminLogin from './components/AdminLogin'
import PrisonList from './components/AdminIndividual'
import { Route } from 'react-router-dom'
import Prison from './components/Prison'


function App() {
  return (
    <div className="App">
      <ClientMain />
      <Route exact path ='/' component={AdminLogin}/> 
      <Route  exact path ='/prison-list' component ={PrisonList}/> 
      <Route path = '/prisons/:prisonID' component={Prison}/> 
    </div>
  );
}

export default App;
