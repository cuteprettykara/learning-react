import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './App.ch9.2.module.css';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;

    return (
      <div className={cx('box', {
        blue: isBlue
      })}>

      </div>
    );
  }
}

export default App;
