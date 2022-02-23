import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../modules/user/actions';
import Login from './Login';

const LoginContainer = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    // setinputs({
    //   ...inputs,
    //   email: '',
    //   password: '',
    // });
    const body = {
      email,
      password,
    };

    if (email === '') {
      alert('이메일을 입력해주세요');
      return;
    }
    if (password === '') {
      alert('패스워드를 입력해주세요');
      return;
    }

    dispatch(loginUser(body)) //
      .then(response => {
        if (response.loginSuccess) {
          localStorage.setItem('userId', response.userId);
          history.push('/');
        } else {
          alert(`${response.message}`);
        }
      });
  };

  return <Login inputs={inputs} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginContainer;
