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
        {console.log('form', this.props.api.url, this.props.api.method)}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>URL:</label>
            <input type="url" name="url" key={this.props.api.url} defaultValue={this.props.api.url} />
            {console.log('defaultValue', this.props.api.url)}

            <input type="submit" value="click" />
          </div>

          <textarea type="text" name="body" id="body" rows="7" cols="40"></textarea>

          <div id='radio'>

            <div>
              <label>Get
          <input type="radio" key={this.props.api.method} defaultChecked={this.props.api.method === "Get"}
                  id='Get' name="method"
                  value="Get" />
              </label>
            </div>


            <div>
              <label >Post
          <input type="radio" key={this.props.api.method} defaultChecked={this.props.api.method === "Post"} id='Post' name="method"
                  value="Post" />
              </label>
            </div>

            <div>
              <label>Put
          <input type="radio" key={this.props.api.method} defaultChecked={this.props.api.method === "Put"} id='Put' name="method"
                  value="Put" />
              </label>
            </div>
            <div>
              <label>Delete
          <input type="radio" key={this.props.api.method} defaultChecked={this.props.api.method === "Delete"} id='Delete' name="method"
                  value="Delete" />
              </label>
            </div>
          </div>
        </form>
      </div>
    )
  }

  // handleClick = (e) => {
  //   if (this.props.api.method) {
  //     document.querySelector(`input[value=${this.props.api.method}]`).click()
  //   };
  // }
}
export default Form;
