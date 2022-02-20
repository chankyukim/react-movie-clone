import React from 'react';
import styles from './Register.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import AuthLayout from '../common/Auth/AuthLayout';
import FormBox from '../common/Auth/FormBox';
import TopBox from '../common/Auth/TopBox';
import BottomBox from '../common/Auth/BottomBox';
import routes from '../routes';
import Button from '../common/Auth/Button';

const Register = ({ inputs, onChange, onSubmit }) => {
  return (
    <AuthLayout>
      <FormBox>
        <TopBox>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faRegistered} size="3x" style={{ color: 'black' }} />
          </div>
          <form className={styles['register-form']} onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              onChange={onChange}
              value={inputs.email}
              placeholder="Email"
            />
            <input
              type="text"
              name="name"
              onChange={onChange}
              value={inputs.name}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              onChange={onChange}
              value={inputs.password}
              placeholder="Password"
            />
            <input
              type="password"
              name="chkPassword"
              onChange={onChange}
              value={inputs.chkPassword}
              placeholder="Confirme Password"
            />
            <Button type="submit" text="Sign up"></Button>
          </form>
        </TopBox>
        <BottomBox cta="Have an account?" linkText="Login" link={routes.login}></BottomBox>
      </FormBox>
    </AuthLayout>
  );
};

export default Register;
