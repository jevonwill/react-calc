import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Members from './pages/Members';
import Home from './pages/Home';
function App() {
  {/* Defines routing */}

  let Page
    switch (window.location.pathname) {
        case "/":
            Page = Home
            break
        case "/members":
            Page = Members
            break
   }
    
  return (
    <React.StrictMode>
      <Nav />
      <Page />
    </React.StrictMode>
  );
}

export default App;
