import React from 'react';
import styles from './FormBox.module.css';

const FormBox = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default FormBox;
