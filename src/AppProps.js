import React from 'react';
import ReactDom from 'react-dom';

// updating life cycles

class App extends React.Component {
  constructor () {
    super();
    this.state = {increasing: false}
  }
  update() {
    //re-render app and increment
    ReactDom.render(
      <App val={this.props.val+1} />, document.getElementById('root')
    )
  }
  componentWillReceiveProps(nextProps) {
    // method to detect when new props are available
    this.setState({increasing: nextProps.val > this.props.val})
  }
  shouldComponentUpdate(nextProps, nextState) {
    // retrieves props and states
    // is predicate (returns true/false)
    // validates whether re-render should happen
    // value on the button will only appear if its divisable by 5
    return nextProps.val % 5 === 0;
  }
  render () {
    console.log('increasing', this.state.increasing)
    return (
      <button onClick={this.update.bind(this)}>{this.props.val}</button>
    )
  }
  componentDidUpdate(prevProps, prevState) {
    // last render
    console.log(`prevProps: ${prevProps.val}`)
  }
}

App.defaultProps = {val: 0}

export default App;
