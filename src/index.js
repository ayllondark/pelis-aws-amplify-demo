import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import {Amplify} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { AmplifyProvider } from '@aws-amplify/ui-react'; 
import awsExports from './aws-exports';
Amplify.configure(awsExports);


const theme = {
    tokens: {
        components: {
            card: {
              padding: { value: '{space.small}' },
            },
          },

    }
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AmplifyProvider theme={theme}>
    <App />
    </AmplifyProvider>
);

