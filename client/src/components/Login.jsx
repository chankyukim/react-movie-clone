import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import AuthLayout from '../common/Auth/AuthLayout';
import FormBox from '../common/Auth/FormBox';
import TopBox from '../common/Auth/TopBox';
import BottomBox from '../common/Auth/BottomBox';
import routes from '../routes';
import Input from '../common/Auth/Input';
import Button from '../common/Auth/Button';

const Login = ({ onChange, onSubmit, inputs }) => {
  return (
    <AuthLayout>
      <FormBox>
        <TopBox>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faKey} size="3x" style={{ color: 'black' }} />
          </div>
          <form className={styles['login-form']} onSubmit={onSubmit}>
            <Input
              type="email"
              name="email"
              onChange={onChange}
              value={inputs.email}
              placeholder="Enter your email"
            />
            <Input
              type="password"
              name="password"
              onChange={onChange}
              value={inputs.password}
              placeholder="Enter your password"
            />
            <Button type="submit" text="Login"></Button>
          </form>
        </TopBox>
        <BottomBox
          cta="Don't have an account"
          linkText="Sign up"
          link={routes.register}
        ></BottomBox>
      </FormBox>
    </AuthLayout>
  );
};

export default Login;
