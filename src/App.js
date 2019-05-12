import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

// function App() {
//   return <div className="App">Hello World</div>;
// }

class App extends Component {
  render() {
    console.log("from app props", this.props);
    return <div>Hello world</div>;
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

export default connect(mapStateToProps)(App);
