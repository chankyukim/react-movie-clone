import React from 'react';
import styles from './TopBox.module.css';

const TopBox = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default TopBox;
