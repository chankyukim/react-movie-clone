import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.module.css';
import Auth from '../hoc/Auth';
import routes from '../routes';
import HomeContainer from './Home/HomeContainer';
import LoginContainer from './Login/LoginContainer';
import RegisterContainer from './SignUp/RegisterContainer';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={routes.home} component={Auth(HomeContainer, null)} />
          <Route path={routes.login} component={Auth(LoginContainer, false)} />
          <Route path={routes.register} component={Auth(RegisterContainer, false)} />
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
