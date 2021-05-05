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


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      headers: {},
      urls: [],
      methods: [],
      history: [],
      isLoad: false,
      isVisible: false,
      error: '',
      body: [],
      callback: { url: '', method: '' },
    }

  }


  callback = (api) => {
    this.setState({ callback: api });
  }

  toggleMenu = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  updateResults = async (data) => {
    try {
      this.setState({
        urls: [...this.state.urls, data.url],
        methods: [...this.state.methods, data.method],
        isLoad: true,
      });

      let request = await fetch(data.url, { method: data.method });
      let response = await request.json();

      if (response) this.toggleMenu();

      let data2 = {
        method: data.method,
        url: data.url,
        body: response,
      };

      let update = [...this.state.history, data2];
      localStorage.setItem('h1', JSON.stringify(update));

      await this.setState({
        body: [...this.state.body, response],
        isLoad: false,
        history: update,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('h1')) || [];
    this.setState({ history });
  }

  render() {
    return (
      <>
        <Header />
        <Form updateResults={this.updateResults} api={this.state.callback} />
        <main>
          <History history={this.state.history} callback={this.callback} />
          <If condition={this.state.isLoad}>
            <Then>
              <p>Loading</p>
            </Then>
            <Else>
              <Results show ={this.state.isVisible} data={this.state} />
            </Else>
          </If>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;