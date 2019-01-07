import React, { Component } from 'react';

class IterationSample extends Component {
  state = {
    names: ['눈사람', '얼음', '눈', '바람'],
    name: ''
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleInsert = () => {
   this.setState({
     names: this.state.names.concat(this.state.name),
     name: ''
   })
  }

  /* 방법1 : splice() 사용*/
  handleRemove = (index) => {
    const newNames = this.state.names.slice();  // 배열 복사
    
    this.setState({
      names: newNames.splice(index, 1)
    })
  }

  render() {
    const nameList = this.state.names.map(
      (name, index) => (
        <li 
          key={index} 
          onDoubleClick={()=>this.handleRemove(index)}>
          {name}
        </li>) 
    );

    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange}/>
        <button onClick={this.handleInsert}>추가</button>
        <ul>
          {nameList}       
        </ul>
      </div>
    );
  }
}

export default IterationSample;