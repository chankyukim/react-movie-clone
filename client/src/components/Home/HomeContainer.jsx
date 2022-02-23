import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../modules/user/actions';
import Home from './Home';

const HomeContainer = () => {
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
  return <Home onClickHandler={onClickHandler} isAuth={isAuth} />;
};

export default HomeContainer;
