import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import {Amplify, Auth} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
//import { AmplifyProvider } from '@aws-amplify/ui-react'; 
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

