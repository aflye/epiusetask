import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import cookies from './cookiestore';
import Login from './views/Login';
import Home from './views/Home';
import Hierarchy from './views/Hierarchy';
import Doors from './views/Doors';
import Unlock from './views/Unlock';
import Lock from './views/Lock';

class App extends React.Component {

  render () {
    var isLoggedIn = true;
    if (cookies.get("session") === null || cookies.get("session") === undefined || cookies.get("session") === ""){
      cookies.remove("session");
      isLoggedIn = false;
    }
    // console.log(isLoggedIn)
    return (
      <Router>
        { isLoggedIn ? ( 
          <></>
        ):(
          <Redirect to='/login'  />
        ) }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/hierarchy" exact component={Hierarchy} />
          <Route path="/doors" exact component={Doors} />
          <Route path="/Unlock" exact component={Unlock} />
          <Route path="/Lock" exact component={Lock} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    );
  }
}

function Logout() {
  cookies.set("session", "", { path: "/" });
  window.location.replace("/login");
  return null;
}

export default App;
