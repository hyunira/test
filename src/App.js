import React, { Component } from 'react';
import Main from './component/Main'
import Header from './component/Header';
import './css/Reset.css';

class App extends Component{
  render(){
    return(
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default App;
