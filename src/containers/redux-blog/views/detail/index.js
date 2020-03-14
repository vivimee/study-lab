import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { detailActions } from "./redux";

class Detailpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id);
  }
  render() {
    const { loading, article } = this.props;
    const { title, date, content } = article;
    return (
      <article>
        {loading && <p>loading ...</p>}
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{content}</p>
      </article>
    );
  }
}

export default connect(
  state => ({
    ...state.detail
  }),
  { ...detailActions }
)(withRouter(Detailpage));
