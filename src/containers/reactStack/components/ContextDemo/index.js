import React, { Component } from "react";
import { Button } from "@material-ui/core";
import PropTypes from 'prop-types';
import Son from '../Son'

const { Provider, Consumer } = React.createContext({ age: 20 });
export const AgeConsumer = Consumer;

class ContextDemo extends Component {
  static childContextTypes = {
    name: PropTypes.string
  };

  getChildContext() {
    const { name } = this.state;
    return {
      name
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "pmm",
      age: 30
    };
  }
  render() {
    const { age } = this.state;
    return (
      <Provider value={{ age, gender: "male" }}>
        <Button
          variant="outlined"
          onClick={() => this.setState({ name: "xyz", age: 15 })}
        >
          changeChildContext
        </Button>
        <Son />
      </Provider>
    );
  }
}

export default ContextDemo;
