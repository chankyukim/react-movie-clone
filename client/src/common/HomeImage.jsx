import React from 'react';
import styles from './HomeImage.module.css';
import Button from './Button';
import routes from '../routes';

const HomeImage = ({ mainText, subText, imageUrl, name }) => {
  return (
    <section
      name={name}
      style={{
        background: `#000000b2 url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={styles.imgSection}
    >
      <div className={styles.contentBox}>
        <h1 className={styles.mainText}>{mainText}</h1>
        <p className={styles.subText}>{subText}</p>

        <Button text="시작하기" link={routes.home} primary />
      </div>
    </section>
  );
};

export default HomeImage;
