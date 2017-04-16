import React from 'react';

// Using reference attribute to create instances which keeps its own state
// Ref returns the node that we are referencing see this.a.refs in update method
// Ref attribute also accepts a callback

// this.a.refs.input.value gets reference of the 'a' component

class App extends React.Component {
  constructor () {
    super();
    this.state = {a: 'A', b: 'B'}
  }
  update() {
    this.setState({
      a: this.a.refs.input.value,
      b: this.b.refs.input.value
    })
  }
  render () {
    return (
      <div>
        <Input
        ref={component => this.a = component}
          type="text"
          update={this.update.bind(this)}
        /> {this.state.a}
        <br />
        <Input
        ref={component => this.b = component}
          type="text"
          update={this.update.bind(this)}
        /> {this.state.b}
      </div>
    )
  }
}

class Input extends React.Component {
  render () {
    return <input ref="input" type="text" onChange={this.props.update} />
  }
}

export default App;
