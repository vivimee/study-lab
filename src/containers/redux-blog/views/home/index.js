import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PreviewList from "../../compoents/home/previewList";
import { actions } from "./redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <PreviewList {...this.props.list} loadArticles={this.props.loadArticles} />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      list: state.home.previewList
    };
  },
  {
    ...actions
  }
)(Home);
