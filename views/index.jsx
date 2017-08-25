var React = require('react');

class App extends React.Component {
  render() {
    return <div><h1>hello {this.props.title}</h1></div>;
  }
}

export default App;