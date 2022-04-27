import './scss/main.scss';
import Home from './components/home/Home';
import AppHeader from "./components/header/AppHeader";
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import LoggedOut from './components/authentication/LoggedOut';
import DonateStuff from './components/donateStuff/DonateStuff';
import PrivateRoute from './components/authentication/PrivateRoute';
import { AuthProvider } from './components/authentication/Auth';
import { HeadData } from './components/HeadData';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <HeadData/>
        <AppHeader/>
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
