import React, { Component } from "react";
import PropTypes from "prop-types";
import { AgeConsumer } from "../..";

class GrandSon extends Component {
  static contextTypes = {
    name: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>this is GrandSon. GrandParent name: {this.context.name}.</p>
        <AgeConsumer>
          {({ age, gender }) => (
            <p>
              {age}-{gender}
            </p>
          )}
        </AgeConsumer>
      </div>
    );
  }
}

export default GrandSon;
