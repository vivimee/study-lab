import React, { Component } from 'react';
import GrandSon from './GrandSon';

class Son extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <p>this is Son</p>
      <GrandSon />
    </div> );
  }
}
 
export default Son;