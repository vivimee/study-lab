import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Button, Grid } from "@material-ui/core";
import Tabs from "./components/Tabs";
import Son from "./components/Son";

const { Provider, Consumer } = React.createContext({ age: 20 });
export const AgeConsumer = Consumer;

class ReactStackPage extends Component {
  static childContextTypes = {
    name: PropTypes.string
  };

  getChildContext() {
    return {
      name: "pmm"
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Provider value={{ age: 30, gender: "male" }}>
          <Son />
        </Provider>
        <Tabs />
        <div d="xxx">自定义属性 d="xxx"</div>
      </Container>
    );
  }
}

export default ReactStackPage;
