import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/front-end/layout/Header'
import * as serviceWorker from './serviceWorker';
import Footer from './components/front-end/layout/Footer';
import Home from './components/front-end/Home';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
    <Home />
  </React.StrictMode>,

  document.getElementById('root')
);

serviceWorker.unregister();
