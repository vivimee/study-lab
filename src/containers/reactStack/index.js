import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Tabs from "./components/Tabs";
import ContextDemo from "./components/ContextDemo";
import Block from "./components/Block";

class ReactStackPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = "深入React技术栈 Demo";
  }
  render() {
    return (
      <Container>
        <Block>
          <ContextDemo />
        </Block>
        <Tabs />
        <Block>
          <div d="xxx">自定义属性 d="xxx"</div>
        </Block>
      </Container>
    );
  }
}

export default ReactStackPage;
