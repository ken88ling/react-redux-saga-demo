import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions";
import { bindActionCreators } from "redux";

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
    userPlusProp: "`${state.user}`  `${props.aRandomProps}`"
  };
};

const mapActionToProps = (dispatch, props) => {
  console.log("mapActionToProps", props);
  return bindActionCreators(
    {
      onUpdateUser: updateUser
    },
    dispatch
  );
};

const mergeProps = (propsFromState, propsFormDispatch, ownProps) => {
  console.log("mergeProps", propsFromState, propsFormDispatch, ownProps);
  return {};
};

export default connect(
  mapStateToProps,
  mapActionToProps,
  mergeProps
)(App);
