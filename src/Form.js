import React from 'react'
import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      method: 'get',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setState({
      method: e.target.method.value,
      url: e.target.url.value,
      body: e.target.body.value
    });

    this.props.updateResults({ ...this.state });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>URL:</label>
            <input type="url" name="url" defaultValue={this.props.api.url} />

            <input type="submit" value="click" />
          </div>

          <textarea type="text" name="body" id="body" rows="7" cols="40"></textarea>

          <div id='radio'>

            <div>
              <label>Get
          <input type="radio" id='Get' name="method" ref={this.handleClick()}
                  value="Get" />
              </label>
            </div>


            <div>
              <label >Post
          <input type="radio" id='Post' name="method" ref={this.handleClick}
                  value="Post" />
              </label>
            </div>

            <div>
              <label>Put
          <input type="radio" id='Put' name="method" ref={this.handleClick}
                  value="Put" />
              </label>
            </div>

            <div>
              <label>Delete
          <input type="radio" id='Delete' name="method" ref={this.handleClick}
                  value="Delete" />
              </label>
            </div>
            {console.log(document.getElementById(this.props.api.method))}
          </div>
        </form>
      </div>
    )
  }

  handleClick = (e) => {
    if (this.props.api.method) {
      document.querySelector(`input[value=${this.props.api.method}]`).click()
    };
  }
}
export default Form;
