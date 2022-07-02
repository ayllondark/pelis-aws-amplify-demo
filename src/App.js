import React from 'react';
//import './styles/styles.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

import { Authenticator, AmplifySignOut } from '@aws-amplify/ui-react';

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
