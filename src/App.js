import { Component } from 'react';
import './footer.scss';
import './header.scss';
import './App.scss';

import Header from './Header'
import Footer from './Footer'
import Form from './Form'
import Results from './Results';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // results: '',
      headers:{},
      results: []
    };
  }

  handleForm = (headers,results) => {
    // console.log(headers,results);
    this.setState({headers,results})
  };

  render() {
    return (
      <>
      <Header />
      <Form prompt="click" handler={this.handleForm} />
      <Results headers={this.state.headers} results={this.state.results} />
      <Footer />
    </>
    );
  }
}
