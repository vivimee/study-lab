import React, { Component } from "react";
import Preview from "./preview";

class PreviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.loadArticles();
  }
  render() {
    return (

        <div>
          {this.props.articleList.map(item => (
            <Preview {...item} key={item.id} />
          ))}
        </div>

    );
  }
}

export default PreviewList;
