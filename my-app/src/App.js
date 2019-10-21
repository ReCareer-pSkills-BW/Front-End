import React from 'react';
import AdminLogin from './components/AdminLogin'
import PrisonList from './components/PrisonList'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path ='/' component={AdminLogin}/> 
      <Route path ='/prison-list' component ={PrisonList}/> 
    </div>
  );
}

export default App;
