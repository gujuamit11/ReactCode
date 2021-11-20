import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import Login from './components/login';
import Posts from "./components/posts"
import Trainee from './components/trainee';
//import TrineeForm from './components/trineeform';
import UpdateCoder from './components/updateCoder';
import TrineeForm from './components/trineeform';
import Register from "./components/register";
import PageNotFound from './components/pagenotfound';

import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/trinee" component={Trainee}/>
        <Route path="/getCoders/add" component={TrineeForm}/>
        <Route path="/coders/update/:cid"component={UpdateCoder}/>
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;