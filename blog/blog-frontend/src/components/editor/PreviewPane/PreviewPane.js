import React from 'react';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);

const PreviewPane = ({markdown, title}) => {
  return (
    <div className={cx('preview-pane')}>
      <h1 className={cx('title')}>
        {title}
      </h1>
      <h1>
        <MarkdownRender markdown={markdown} />
      </h1>
    </div>
  );
};

export default PreviewPane;