import React, { useEffect } from 'react';
import Landing from '../components/Landing';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../modules/user/actions';

const LandingContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(state => state?.user?.userData?.isAuth);

  const onClickHandler = () => {
    dispatch(logoutUser()) //
      .then(response => {
        if (response.success) {
          history.push('/login');
        } else {
          alert('로그아웃 하는데 실패했습니다');
        }
      });
  };
  return <Landing onClickHandler={onClickHandler} isAuth={isAuth} />;
};

export default LandingContainer;
