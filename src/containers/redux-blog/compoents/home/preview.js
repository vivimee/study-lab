import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, description, date, id } = this.props;
    return (
      <article style={{ margin: '0 0 20px' }}>
        <Link to={`/detail/${id}`}><h1>{title}</h1></Link>
        <h6>{date}</h6>
        <p>{description}</p>
      </article>
    );
  }
}

export default Preview;
