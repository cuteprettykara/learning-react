import React, { Component } from 'react';
import './App.css';
import './MyComponent'
import MyComponent from './MyComponent';

function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark:function() {
      console.log(this.name, ': 멍멍!');
    }
  };
}

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name, ': 멍멍!');
    }
  };
}

const blackDog = new BlackDog();
blackDog.bark();  // 검둥이 : 멍멍!

const whiteDog = new WhiteDog();
whiteDog.bark();  // 흰둥이 : 멍멍!

// Test 1
/* var gangwon = {
  resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
  print: function(delay=1000) {
    console.log(this === gangwon);
    setTimeout(function () {
      // console.log(this.resorts.join(","));
      console.log(this === window);
    })
  }
}
gangwon.print();  // Cannot read property 'join' of undefined
 */
/* // Test 2
var gangwon = {
  resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
  print: function(delay=1000) {
    setTimeout(() => {
      console.log(this.resorts.join(","));
      console.log(this === gangwon);
    })
  }
}
gangwon.print();  // 용평,평창,강촌,강릉,홍천

 */


/* // Test 3
var gangwon = {
  resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
  print: (delay=1000) => {
    console.log(this);    // window 객체
    setTimeout(() => {
      // console.log(this.resorts.join(","));
      console.log(this === window); // true
      console.log(this);  // window 객체
    });
  }
}
gangwon.print();  // Cannot read property 'resorts' of undefined
 */

 // Test 4
var gangwon = {
  resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
  print: function(delay=1000) {
    console.log(this);    // gangwon 객체
    setTimeout(() => {
      console.log(this.resorts.join(","));
      console.log(this === gangwon); // true
      console.log(this);  // gangwon 객체
    });
  }
}
gangwon.print();  // Cannot read property 'resorts' of undefined




class App extends Component {
  render() {

    return (
      <MyComponent name="React" age={4}/>
    );
  }
}

export default App;
