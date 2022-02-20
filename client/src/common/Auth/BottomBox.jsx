import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BottomBox.module.css';

const BottomBox = ({ cta, linkText, link }) => {
  return (
    <div className={styles.container}>
      <span>
        {cta} <Link to={link}>{linkText}</Link>
      </span>
    </div>
  );
};

export default BottomBox;
