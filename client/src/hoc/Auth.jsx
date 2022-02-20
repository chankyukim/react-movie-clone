import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth } from '../modules/user/actions';

const Auth = (SpecificComponent, option, adminRoute = null) => {
  const AuthenticationCheck = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
      dispatch(auth()) //
        .then(response => {
          //로그인 하지 않은 상태
          if (!response.isAuth) {
            if (option) {
              history.push('/login');
            }
          } else {
            //로그인한 상태
            if (adminRoute && !response.isAdmin) {
              history.push('/');
            } else {
              if (!option) {
                history.push('/');
              }
            }
          }
        });
    }, [dispatch, history]);

    return <SpecificComponent />;
  };

  return AuthenticationCheck;
};

export default Auth;
