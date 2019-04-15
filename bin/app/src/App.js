//https://github.com/oktadeveloper/okta-spring-boot-react-crud-example
import React, { Component } from 'react';
import './App.css';
import GroupEdit from './GroupEdit';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';
import UserList from './UserList';
import UserEdit from './UserEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/groups' exact={true} component={GroupList}/>
          <Route path='/users' exact={true} component={UserList}/>
          <Route path='/groups/:id' component={GroupEdit}/>
          <Route path='/users/:id' component={UserEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
