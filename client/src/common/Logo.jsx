import React from 'react';
import styles from './Logo.module.css';
import WLogo from '../assets/images/watcha.png';
import routes from '../routes';

const Logo = ({ sideLogo }) => {
  return (
    <a href={routes.main}>
      <img
        src={WLogo}
        alt="Logo img"
        className={sideLogo ? `${styles.sideLogo}` : `${styles.headerLogo}`}
      />
    </a>
  );
};

export default Logo;
