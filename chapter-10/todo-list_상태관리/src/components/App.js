import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    input: '', // input 값

    // 초기 일정 데이터
    todos : [
      { id: 0, text: '리액트 공부하기', done: true },
      { id: 1, text: '컴포넌트 스타일링 해보기', done: false },
    ]
  }

  id = 1;
  getId = () => ++this.id;


  handleChange = e => {
    const {value} = e.target;
    this.setState({
      input: value
    });
  }

  handleInsert = () => {
    const { todos, input } = this.state;

    const newTodo = {
      id: this.getId(),
      text: input,
      done: false
    };

    this.setState({
      input: input,
      todos : [...todos, newTodo]
    });
  }

  handleToggle = (id) => {
    const { todos, input } = this.state;

    // 방법1
/*     const newTodos = todos.map(todo => {
      if (todo.id === id) 
        return {
          id: todo.id,
          text: todo.text,
          done: !todo.done
        };

      return todo;
    }); */

     // 방법2
    const newTodos = todos.map(todo =>
      (todo.id === id)
      ?  {
            id: todo.id,
            text: todo.text,
            done: !todo.done
          }
      : todo
    );

    this.setState({
      input: input,
      todos: newTodos
    })
  }

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle} = this;

    return (
      <div>
        <PageTemplate>
          <TodoInput onChage={handleChange} value={input} onInsert={handleInsert} />
          <TodoList todos={todos} onToggle={handleToggle} />
        </PageTemplate>
      </div>
    );
  }
}

export default App;