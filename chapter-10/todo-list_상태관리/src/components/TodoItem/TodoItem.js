import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
  render() {
    const {done, children, onToggle, onRemove} = this.props;

    return (
      <div className={cx('todo-item')} onClick={onToggle}>
        <input type="checkbox" className={cx('tick')} checked={done}/>
        <div className={cx('text', {done})}>{children}</div>
        <div className={cx('delete')} onClick={onRemove}>[지우기]</div>
      </div>
    );
  }
}

export default TodoItem;