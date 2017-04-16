import React from 'react';

// class component
// contains state

class App extends React.Component {
  render () {
    return <Button>I <Heart /> React</Button>
  }
  // constructor () {
  //   super();
  //   this.state = {
  //     txt: 'this is the state'
  //   }
  // }
  // update (e) {
  //   this.setState({txt: e.target.value})
  // }
  // render() {
  //   // JSX
  //   // wrap JSX in parens to allow for whitespace
  //   return (
  //     <div>
  //       <h1>{this.state.txt}</h1>
  //       <Widget update={this.update.bind(this)} />
  //       <Widget update={this.update.bind(this)} />
  //       <Widget update={this.update.bind(this)} />

  //     </div>
  //   )
  //   // React
  //   //return React.createElement('h1', null, 'Hello Eggheads!')
  // }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render () {
    return <span>&hearts;</span>
  }
}

// const Widget = (props) =>
// <input type="text" onChange={props.update} />


// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: "this is the default txt"
// }

//stateless function component

//const App = () => <h1>Hello stateless</h1>

export default App;
