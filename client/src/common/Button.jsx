import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ text, link, primary }) => {
  return (
    <a
      href={link}
      className={
        primary ? `${styles.btn} ${styles.colorPrimary}` : `${styles.btn} ${styles.colorSub}`
      }
    >
      {text}
    </a>
  );
};

export default Button;
