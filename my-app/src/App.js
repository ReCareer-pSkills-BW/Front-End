import React from 'react';
import AdminLogin from './components/AdminLogin'
import PrisonList from './components/PrisonList'
import { Route } from 'react-router-dom'
import Prison from './components/Prision'

function App() {
  return (
    <div className="App">
      <Route exact path ='/' component={AdminLogin}/> 
      <Route path ='/prison-list' component ={PrisonList}/> 
      <Route path = '/prison-list/:prisonID' component={Prison}/> 
    </div>
  );
}

export default App;
