import React from 'react';
import ReactDom from 'react-dom';

// 1. componentWillMount will fire before it hits the dom
// 2. Render method will be called
// 3. componentDidMount is when it is rendered to the dom
// 4. componentWillUnmount when component is removed from dom

class App extends React.Component {
  constructor () {
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({
      val: this.state.val + 1
    })
  }
  componentWillMount() {
    console.log('componentWillMount')
    // intercept state before render
    this.setState({m: 2})
  }
  render () {
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    )
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.inc = setInterval(this.update, 500)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }
}

// wrapper will inject the App component on click event
class Wrapper extends React.Component {
  mount() {
    ReactDom.render(<App />,document.getElementById('a'))
  }
  unmount() {
    ReactDom.unmountComponentAtNode(document.getElementById('a'))
  }
  render () {
    return (
      <div>
      <button onClick={this.mount.bind(this)}>Mount</button>
      <button onClick={this.unmount.bind(this)}>Unmount</button>
      <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;
