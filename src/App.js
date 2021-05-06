import { Component } from 'react';
import { If, Then, Else } from 'react-if';

import './footer.scss';
import './header.scss';
import './App.scss';

import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import Results from './Results';
import History from './History';
import Main from './main';

  const App = () => {
    return (
      <>
        <Header />
        <Main/>
        <Footer />
      </>
    );
  }

export default App;
