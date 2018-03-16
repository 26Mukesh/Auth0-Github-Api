import React, { Component } from 'react';
import {Navbar , Nav , NavItem } from 'react-bootstrap';

class Header extends Component {

onLogin(){
  this.props.onLogin();
}
onLogout(){
  this.props.onLogout();
}

  render(){
    let page;
    if(this.props.idToken){
        page = <NavItem className="button" onClick={this.onLogout.bind(this)}>LogOut</NavItem>
    }else{
      page = <NavItem className="button" onClick={this.onLogin.bind(this)}>LogIn</NavItem>
    }
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            GithubSearch
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {page}
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
