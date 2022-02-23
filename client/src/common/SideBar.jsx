import React from 'react';
import routes from '../routes';
import Logo from './Logo';
import styles from './SideBar.module.css';
import SideItem from './SideItem';
import homeIcon from '../assets/images/home.svg';
import searchIcon from '../assets/images/search.svg';
import bookmarkIcon from '../assets/images/bookmark.svg';

const SideBar = () => {
  return (
    <nav className={styles.sideBar}>
      <Logo sideLogo />
      <ul className={styles.sideNav}>
        <SideItem current={routes.home === '/home'} icon={homeIcon} link={routes.home} text="홈" />
        <SideItem
          current={routes.home === '/search'}
          icon={searchIcon}
          link={routes.search}
          text="검색"
        />
        <SideItem
          current={routes.home === '/favorite'}
          icon={bookmarkIcon}
          link={routes.favorite}
          text="보고싶어요"
        />
      </ul>
    </nav>
  );
};

export default SideBar;
