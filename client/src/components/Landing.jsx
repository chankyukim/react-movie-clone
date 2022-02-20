import React from 'react';
import styles from './Landing.module.css';

const Landing = ({ onClickHandler, isAuth }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles['heading-primary']}>시작 페이지</h2>
      {isAuth && <button onClick={onClickHandler}>로그아웃</button>}
    </div>
  );
};

export default Landing;
