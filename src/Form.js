import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        words: '',
        method: ''
      };
    }
  
    handleClick = (e) => {
      const input1 = document.getElementById('words-input').value;
      const btnText = document.getElementsByClassName('active') ;
      this.setState({ words: input1 ,  method: btnText[0].textContent });
    };
  
    handleActive = (e) => {
      var btns = document.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) { 
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        });
      } 
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
            <button onClick={this.handleActive} className="btn">GET</button>
            <button onClick={this.handleActive} className="btn">POST</button>
            <button onClick={this.handleActive} className="btn">PUT</button>
            <button onClick={this.handleActive} className="btn">DELETE</button>
          </div>
  
          <div id="content"> {this.state.method} {this.state.words}</div>
        </main>
      );
    }
  }

  export default Form;
