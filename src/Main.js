import React from 'react';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        words: '',
        method: 'GET'
      };
    }
  
    handleClick = (e) => {
      const input1 = document.getElementById('words-input').value;
      this.setState({ words: input1 });
    };
  
    handleActive = (e) => {
      let btns = document.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
      const btnText = document.getElementsByClassName('active') ;
      this.setState({ method: btnText[0].textContent });
    };
  
    render() {
      return (
        <main>
          <div id="input1">
          <label>URL:</label>
          <input id="words-input" type="text" />
          <button  onClick={this.handleClick}>click</button>
          </div>
      
          <div id="myDIV">
            <button onClick={this.handleActive} className="btn active">GET</button>
            <button onClick={this.handleActive} className="btn">POST</button>
            <button onClick={this.handleActive} className="btn">PUT</button>
            <button onClick={this.handleActive} className="btn">DELETE</button>
          </div>
  
          <div id="content"> {this.state.method} {this.state.words}</div>
        </main>
      );
    }
  }

  export default Main;
