import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import cls from './index.css';
import File from './components/File';

class App extends Component {

  render () {
    return (
      <div className={cls.container}>
        <File/>
      </div>
    );
  }
}
export default App;
