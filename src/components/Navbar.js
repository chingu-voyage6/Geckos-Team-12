import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input } from 'reactstrap';


const NavBar = () =>{

    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Quora</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Answer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Notifications</NavLink>
              </NavItem>
              <NavItem className="search">
                <Input type="search" name="search" id="" placeholder="search Quora" />
              </NavItem>
              <NavItem>
                <NavLink href="/">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Add Question</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
       
    }

export default NavBar;

