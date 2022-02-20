import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Register from '../components/Register';
import { registerUser } from '../modules/user/actions';

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    password: '',
    confirmePassword: '',
  });
  const { email, name, password, confirmPassword } = inputs;

  const onChange = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    // setinputss({
    //   ...inputs,
    //   email: '',
    //   password: '',
    // });
    const body = {
      email: email,
      name: name,
      password: password,
    };

    if (email === '') {
      alert('이메일을 입력해주세요');
      return;
    }
    if (name === '') {
      alert('이름을 입력해주세요');
      return;
    }
    if (password === '') {
      alert('패스워드를 입력해주세요');
      return;
    }
    if (password !== confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 다릅니다.');
      return;
    }

    dispatch(registerUser(body)) //
      .then(response => {
        if (response.success) {
          history.push('/login');
        }
      });
  };

  return <Register inputs={inputs} onChange={onChange} onSubmit={onSubmit} />;
};

export default RegisterContainer;
