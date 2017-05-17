import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      poemValid: false
    };
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    }, this.numOfLines)
  }

  numOfLines(){
    let poem = this.state.value
    let poemArray = poem.split(/\n/)
    // console.log("trimmed", poemArray[0].trim().split(' '))
    // console.log(poemArray[0].split(' '))
    if (poemArray.length === 3 ){
      let firstLine = poemArray[0].trim().split(' ').length
      let secondLine = poemArray[1].trim().split(' ').length
      let thirdLine = poemArray[2].trim().split(' ').length
      if (firstLine === 5 &&  secondLine === 3 && thirdLine === 5){
        this.setState({
          poemValid: true
        })
      }
    }
  }

  render() {
    console.log(this.state);
    if (this.state.poemValid === true){
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
        </div>
      )
    }else{
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        </div>
      );
    }
  }
}
