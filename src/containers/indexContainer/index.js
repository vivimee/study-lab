import React, { Component } from 'react';
import './index.less';

export default class AContainer extends Component {
  async componentDidMount() {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise done');
      }, 3000);
    });
    console.log(res);
  }

  doSomething = () => {
    console.log('do');
  }

  render() {
    return (
      <div className="view-root box ">
        <div className="box float">float</div>
        <div className="message">你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊</div>
      </div>
    );
  }
}
