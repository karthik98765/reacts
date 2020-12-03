import React, { Component } from 'react';
import Ninjas from './ninjas';

class App extends Component {
  state = {
    ninjas : [
      { name: 'ryu', age: 30, belt: 'black', id: 1 },
      { name: 'yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'karma', age: 25, belt: 'pink', id: 3 }
    ]
  }
  render() {
  return (
    <div className="App">
      <h1>My first React app</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas={this.state.ninjas}/>
    </div>
  );
 }
}

export default App;
