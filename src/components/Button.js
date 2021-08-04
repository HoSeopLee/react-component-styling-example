import React, { useState } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';
const Button = (props) => {
  const [loading, setLoading] = useState(false);

  const cx = classNames.bind(styles);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <button
      onClick={startLoading}
      className={cx('button', { loading: loading })}
      {...props}
    />
  );
};
export default Button;
