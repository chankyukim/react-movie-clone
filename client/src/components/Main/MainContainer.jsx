import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../modules/user/actions';
import Main from './Main';

const MainContainer = () => {
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
  return <Main onClickHandler={onClickHandler} isAuth={isAuth} />;
};

export default MainContainer;
