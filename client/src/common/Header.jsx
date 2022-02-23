import React from 'react';
import styles from './Header.module.css';
import Button from './Button';
import routes from '../routes';
import Logo from './Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.btnBox}>
        <Button text="로그인" link={routes.login} />
        <Button text="회원가입" link={routes.register} />
      </div>
    </header>
  );
};

export default Header;
