import React, { useRef } from 'react';
import styles from './Main.module.css';
import Image1 from '../../assets/images/Image1.jpg';
import Image2 from '../../assets/images/Image2.jpg';
import Image3 from '../../assets/images/Image3.jpg';
import routes from '../../routes';
import Button from '../../common/Button';
import Header from '../../common/Header';

const Main = ({ onClickHandler, isAuth }) => {
  const TargetOne = useRef();
  const TargetTwo = useRef();
  const TargetThree = useRef();

  const onClickOne = e => {
    TargetOne.current.scrollIntoView({ behavior: 'smooth' });
  };
  const onClickTwo = () => {
    TargetTwo.current.scrollIntoView({ behavior: 'smooth' });
  };
  const onClickThree = () => {
    TargetThree.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* carousel */}
      <div className={styles.carouselContainer}>
        <div className={styles.carousel} onClick={onClickOne}></div>
        <div name="sectionTwo" className={styles.carousel} onClick={onClickTwo}></div>
        <div name="sectionThree" className={styles.carousel} onClick={onClickThree}></div>
      </div>

      {/* section1 */}
      <section
        ref={TargetOne}
        name="sectionOne"
        style={{
          background: `#000000b2 url(${Image1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={styles.imgSection}
      >
        <div className={styles.contentBox}>
          <h1 className={styles.mainText}>영화, 드라마, 예능을 무제한으로</h1>
          <p className={styles.subText}>매주 5백 여편의 신작이 업데이트 됩니다.</p>

          <Button text="시작하기" link={routes.main} primary />
        </div>
      </section>

      {/* section2 */}
      <section
        ref={TargetTwo}
        style={{
          background: `#000000b2 url(${Image2})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={styles.imgSection}
      >
        <div className={styles.contentBox}>
          <h1 className={styles.mainText}>영화, 드라마, 예능을 무제한으로</h1>
          <p className={styles.subText}>매주 5백 여편의 신작이 업데이트 됩니다.</p>

          <Button text="시작하기" link={routes.main} primary />
        </div>
      </section>

      {/* section3 */}
      <section
        ref={TargetThree}
        name="sectionThree"
        style={{
          background: `#000000b2 url(${Image3})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={styles.imgSection}
      >
        <div className={styles.contentBox}>
          <h1 className={styles.mainText}>영화, 드라마, 예능을 무제한으로</h1>
          <p className={styles.subText}>매주 5백 여편의 신작이 업데이트 됩니다.</p>

          <Button text="시작하기" link={routes.main} primary />
        </div>
      </section>

      {/* <HomeImage
        imageUrl={Image1}
        mainText="영화, 드라마, 예능을 무제한으로"
        subText="매주 5백 여편의 신작이 업데이트 됩니다."
      />
      <HomeImage
        imageUrl={Image2}
        mainText="이제 TV로 최고의 화질을 경험하세요."
        subText="최대 Ultra HD 4K 해상도로 생생한 감동을 느껴보세요."
      />
      <HomeImage
        imageUrl={Image3}
        mainText="이동 중에도 감상을 멈추지 마세요."
        subText="보고 싶은 콘텐츠를 다운로드하여 오프라인으로 즐기세요."
      /> */}
    </div>
  );
};

export default Main;
