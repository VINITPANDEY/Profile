import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/front-end/layout/Header'
import * as serviceWorker from './serviceWorker';
import Footer from './components/front-end/layout/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>,

  document.getElementById('root')
);

serviceWorker.unregister();
