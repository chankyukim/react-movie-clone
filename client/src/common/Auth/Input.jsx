import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, name, onChange, value, placeholder }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
