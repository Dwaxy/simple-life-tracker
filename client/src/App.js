import React, { Component } from 'react'

class App extends Component {
  state = {items: []}

  componentDidMount() {
    fetch('/api/entries')
      .then(res => res.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
          <List items={this.state.items} />
      </div>
    );
  }
}

const List = (props) => {
  if(props.items.length < 1) {
    return(<p> There are no items</p>)
  } else {
    return(
      <div>
        {props.items.map(item =>
          <div key={item._id}>{item.input}</div>
        )}
      </div>
    )
  }
}

export default App