/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */

import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import "./tween";
import "./index.less";

const getDirectionValue = (ele, direction) =>
  parseFloat(ele.style[direction].replace(/px/, "")) || 0;
const setDirectionValue = (ele, direction, value) => {
  ele.style[direction] = `${value}px`;
};
const move = (ele, direction, distance) => {
  const now = getDirectionValue(ele, direction);
  const target = now + distance;
  setDirectionValue(ele, direction, target);
};

const animation = (ele, direction, distance, duration, computer) => {
  const startPosition = getDirectionValue(ele, direction);
  const startTime = Date.now();
  const request = () => {
    requestAnimationFrame(() => {
      const now = Date.now();
      const position = computer(
        now - startTime,
        startPosition,
        distance,
        duration
      );
      if (now >= startTime + duration) {
        setDirectionValue(ele, direction, startPosition + distance);
      } else {
        setDirectionValue(ele, direction, position);
        request();
      }
    });
  };
  request();
};

const Item = ({ computer, namePrefix, distance = 500, duration = 1000 }) => {
  let ele;
  const start = () => {
    animation(ele, "left", distance, duration, computer);
  };
  const reset = () => {
    setDirectionValue(ele, "left", 0);
  };
  return (
    <div className="item-box">
      <span className="name">{namePrefix} {computer.name}</span>
      <Button variant="outlined" color="primary" onClick={start}>
        启动
      </Button>
      <Button style={{ margin: "0 10px" }} onClick={reset}>
        重置
      </Button>
      <div className="parent">
        <span className="child" ref={el => (ele = el)} />
      </div>
    </div>
  );
};

class AnimationJS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    document.title = '动画函数';
  }

  render() {
    const arr = [{ computer: Math.tween.Linear }];
    for (let key in Math.tween) {
      const item = Math.tween[key];
      if (typeof item === 'object') {
        arr.push({ computer: item.easeIn, namePrefix: key });
        arr.push({ computer: item.easeOut, namePrefix: key });
        arr.push({ computer: item.easeInOut, namePrefix: key });
      }
    }
    return (
      <Container>
        <h1 style={{textAlign: 'center'}}>动画函数</h1>
        {arr.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </Container>
    );
  }
}

export default AnimationJS;
