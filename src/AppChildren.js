import React from 'react';
import './App.css';

// class component
// contains state

class App extends React.Component {
  render () {
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render () {
    // retrieve children 
    //let items = React.Children.map(this.props.children, child => child)
    //let items = React.Children.toArray(this.props.children)
    //let items = React.Children.forEach(this.props.children, child => console.log(child.props.className))
    //below only returns one item else it throws an error
    let items = React.Children.only(this.props.children)
    console.log(items);
    return null
  }
}

export default App;
