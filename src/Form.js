import React from 'react'

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
      body:e.target.body.value
    });

    this.props.updateResults({ ...this.state });
  }

  //checked={this.props.api.method==='Get'}

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <div>
          <label>URL:</label>
          <input type="url" name="url" defaultValue={this.props.api.url} />

          <input type="submit" value="click" />
          </div>

          <textarea  type="text" name="body"id="body"rows="7"cols="40"></textarea>

          <div>

          <div>
          <label>Get
          <input type="radio" id='11' name="method"  value="Get"/>
          </label>
          </div>


          <div>
          <label >Post
          <input type="radio" name="method"  value="Post" />
          </label>
          </div>
          
          <div>
          <label>Put
          <input type="radio" name="method"  value="Put" />
          </label>
          </div>

          <div>
          <label>Delete
          <input type="radio" name="method"  value="Delete" />
          </label>
          </div>

          </div>
        </form>
      </div>
    )
  }
}
export default Form;