import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/nav.css';
import Search from './Search';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Router>
          <Navbar color="transparent" light expand="md" scrolling>
            <NavbarBrand href="/" className="nav-brand">
              <strong>Quora</strong>
            </NavbarBrand>
            {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left className="nav-items">
                <NavItem >
                <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">Answer</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">Notifications</NavLink>
                </NavItem>
                <NavItem>
                  <Search />
                </NavItem>
              </NavbarNav>
              <NavbarNav right className="nav-items">
                <NavItem>
                  <NavLink to="/"><ion-icon size="large" name="person"></ion-icon></NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/" className="button">Add Question</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
      </Router>
    );
  }
}

export default NavBar;


