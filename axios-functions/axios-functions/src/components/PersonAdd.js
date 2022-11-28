import React from 'react';
import axios from 'axios';

export default class PersonAdd extends React.Component {
  state = {
    name: '',
    username: ''
  };

  onNameChange = event => {
    this.setState({ name: event.target.value});
  };

  onUserChange = event => {
    this.setState({ username: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      username: this.state.username
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.onNameChange} />
          </label>
          <label>
            Username:
            <input type="text" name="username" onChange={this.onUserChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}