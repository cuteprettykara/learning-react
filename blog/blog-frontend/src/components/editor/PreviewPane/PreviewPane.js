import React from 'react';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PreviewPane = ({markdown, title}) => {
  return (
    <div className={cx('preview-pane')}>
      <h1 className={cx('title')}>
        제목
      </h1>
      <h1>
        내용
      </h1>
    </div>
  );
};

export default PreviewPane;