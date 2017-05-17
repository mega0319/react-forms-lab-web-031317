import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    // this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: ''
    };
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        Characters Remaining: {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}
