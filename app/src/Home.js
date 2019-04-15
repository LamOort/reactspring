import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Link to="/groups"><Button color="link">Manage JUG Tour</Button></Link>
          <Link to="/users"><Button color="link">Manage users</Button></Link>
        </Container>
      </div>
    );
  }
}

export default Home;