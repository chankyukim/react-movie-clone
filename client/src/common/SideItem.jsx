import React from 'react';
import styles from './SideItem.module.css';

const SideItem = ({ icon, link, text, current }) => {
  console.log(current);
  return (
    <li className={current ? `${styles.item} ${styles.routeColor}` : styles.item}>
      <a href={link} className={styles.itemLink}>
        <img src={icon} alt="icon" className={styles.icon} />
        <span>{text}</span>
      </a>
    </li>
  );
};

export default SideItem;
