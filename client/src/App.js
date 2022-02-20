import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import styles from './App.module.css';
import Auth from './hoc/Auth';
import routes from './routes';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={Auth(LandingPage, null)} />
          <Route path={routes.login} component={Auth(LoginPage, false)} />
          <Route path={routes.register} component={Auth(RegisterPage, false)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//option null => 아무나 출입이 가능한 페이지 (LandingPage, About PAge)
//option true => 로그인한 유저만 출입이 가능한 페이지(Detail Page)
//option false => 로그인한 유저는 출입이 불가능한 페이지(Register Page, Login Page)
//adminRoute (true라면)=> 어드민 유저만 들어갈 수 있다(Admin Page)
