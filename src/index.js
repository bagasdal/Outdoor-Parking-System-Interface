import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { InforProvider } from "./components/context";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <InforProvider>
  <Router>
    <App />
  </Router>
  </InforProvider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
