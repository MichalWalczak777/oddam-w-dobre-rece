import './scss/main.scss';
import Home from './components/Home';
import HomeHeader from "./components/HomeHeader";
import Login from './components/Login';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <HomeHeader/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>                                                     
      </Switch>
    </HashRouter>
  );
}

export default App;
