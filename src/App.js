import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions";
import { dispatch } from "../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/rxjs/internal/observable/pairs";

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={this.onUpdateUser} />
        <div>{this.props.user}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user}``${props.aRandomProps}`
  };
};

const mapActionToProps = (dispatch, props) => {
  return {
    onUpdateUser: updateUser
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);
