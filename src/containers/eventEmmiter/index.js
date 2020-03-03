import React from 'react';
import EventEmmiter from './EventEmmiter';
// import EventEmmiter from 'eventemitter10';

const EE = new EventEmmiter();

console.log(EE);
window.EE = EE;


const App = () => <div>eventEmmiter</div>;

export default App;


