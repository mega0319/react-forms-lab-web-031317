import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  usernameChange(e){
    this.setState({
      username: e.target.value
    })
  }

  passwordChange(e){
    this.setState({
      password: e.target.value
    })
  }

  stopRefresh(e){
    e.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={(e) => this.stopRefresh(e)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={(e) => this.usernameChange(e)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={(e) => this.passwordChange(e)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
