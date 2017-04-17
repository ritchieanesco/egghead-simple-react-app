import React from 'react';

// mapping through data

class App extends React.Component {
  constructor () {
    super();
    this.state = {items: []}
  }
  componentWillMount() {
    //populate data from ajax call
    fetch('http://swapi.co/api/people/?format=json')
    .then( response => response.json() )
    .then( ({results: items}) => this.setState({items}) )
  }
  filter (e) {
    this.setState({filter: e.target.value})
  }
  render () {
    let items = this.state.items
    // if value in input then filter results
    if (this.state.filter) {
      items = items.filter( item=>
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase())
      )
    }
    return (
      <div>
      <input type="text" onChange={this.filter.bind(this)} />
      {/* running array map in render method */}
      {/*items.map(item => <h4 key={item.name}>{item.name}</h4>)*/}
      {items.map(item => <Person key={item.name} person={item} />)}
      </div>
    )
  }
}

// abstract out map function to stateless component
const Person = (props) => <h4>{props.person.name}</h4>

export default App;
