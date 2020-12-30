import './scss/main.scss';
import Home from './components/Home';
import HomeHeader from "./components/HomeHeader";
import Login from './components/Login';
import Register from './components/Register';
import LoggedOut from './components/LoggedOut';
import DonateStuff from './components/DonateStuff';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/Auth';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <HomeHeader/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>  
            <Route exact path="/loggedOut" component={LoggedOut}/>   
            <PrivateRoute exact path="/donateStuff" component={DonateStuff}/>                                                                                                                                                                                                               
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
