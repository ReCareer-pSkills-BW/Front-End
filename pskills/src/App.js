import React from 'react';
import './App.css';
import ClientMain from './components/ClientMain';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path ="/home" component={LandingPage} />
      <Route path = '/people' component = {ClientMain} />
      <ClientMain />
    </div>
  );
}

export default App;
