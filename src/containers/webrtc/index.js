import React, { Component } from 'react';
import './index.less';

class WebRTCPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.bootStrap();
  }
  bootStrap = async () => {
    navigator.webkit
    try {
      const data = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (<div>
      <div className="view-box">
        {/* <vedio /> */}
      </div>
    </div>);
  }
}

export default WebRTCPage;