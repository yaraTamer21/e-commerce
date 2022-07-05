import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-toastify/dist/ReactToastify.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import { legacy_createStore as createStore} from 'redux'

import { Provider } from 'react-redux';
import App from './App';

import { rootss } from './Redux/reducers';
import { GetuseContextProvider} from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(rootss)

root.render(
  <PayPalScriptProvider options={ {"client-id":"ARM8FWnUTM3GwkWCDHkiGb7lE1aCDNkgZ152b0FQfEossr40JvwsbYcFQXSpCdhYLusrCP899s9F1Bx2"}} >

 
 <Provider store={store}>
 <GetuseContextProvider>
      <App />
      </GetuseContextProvider>
    </Provider>


  
   

  </PayPalScriptProvider>

);




