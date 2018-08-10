import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'mdbreact';
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
          <Navbar color="transparent" light expand="md" scrolling>
            <NavLink to="/" className="nav-brand">
              <NavbarBrand className="nav-brand">
                <strong>Quora</strong>
              </NavbarBrand>
            </NavLink>
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
                  <NavLink to="/login">Log In</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
    );
  }
}

export default NavBar;

