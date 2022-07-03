import React from 'react';
//import './styles/styles.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
 
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function App() {

  return (
    <>
    <Authenticator>
    <Navbar />
    <Home /> 
    </Authenticator>
    </>
  );
}

export default App;
