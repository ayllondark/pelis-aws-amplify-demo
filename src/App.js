import React from 'react';
//import './styles/styles.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

import Amplify from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'; 
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <>
    <Navbar />
    <Home />
    </>
  );
}

export default withAuthenticator(App);
