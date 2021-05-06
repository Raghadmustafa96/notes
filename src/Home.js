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
import './App.scss';


class Home extends Component {

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
    this.setState({
      urls: [...this.state.urls, data.url],
      methods: [...this.state.methods, data.method],
      isLoad: true,
    });

    console.log('................', data.method);

    let body1 = data.body;
    let body2;
    let body3;

    if (data.method === 'Get') {
      body3 = null;

    } else {
      if (body1.length === 0) {
        body3 = null;
      } else {
        body2 = JSON.parse(body1)
        body3 = JSON.stringify(body2);
      }
    }
    let request;

    try {
      request = await fetch(data.url, {
        method: data.method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',

        body: body3

      })
    } catch (error) {
      await console.log('______errorrrrrrrrrrrrrrrrr_______', error);
    
      await this.setState({
        body: [...this.state.body, 'url not found'],
        isLoad: false,
        isVisible: true
      });
    }


    console.log('__requesterror', request);
    if (request) {
      this.toggleMenu();
      let response = await request.json();
      console.log(response);

      let data2 = {
        method: data.method,
        url: data.url,
        body: response,
      };

      //..........................................
      let arr = this.state.history.map(element => {
        return element.url + element.method;
      })

      // console.log(arr);
      let update;
  
      if (arr.includes(data2.url + data2.method)) {
           update = this.state.history
      } else {
        update = [...this.state.history, data2];
        localStorage.setItem('h1', JSON.stringify(update));
      }


      await this.setState({
        body: [...this.state.body, response],
        isLoad: false,
        isVisible: true,
        history: update,
      });
    }
  }


  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('h1')) || [];
    this.setState({ history });
  }

  render() {
    return (
      <>
        <Form updateResults={this.updateResults} api={this.state.callback} />
          <History history={this.state.history} callback={this.callback} />
          <If condition={this.state.isLoad}>
            <Then>
              <p>Loading</p>
            </Then>
            <Else>
              <Results show ={this.state.isVisible} data={this.state} />
            </Else>
          </If>
      </>
    );
  }
}

export default Home;