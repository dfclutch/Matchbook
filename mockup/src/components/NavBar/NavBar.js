import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss';
import NavBarLogo from "./NavBarLogo";
class NavBar extends Component {
    render() {
        return (
          <div>
              <Navbar className="NavBar">
                  <NavbarBrand className="NavBarBrand"><NavBarLogo/></NavbarBrand>
              </Navbar>
          </div>
        );
    }
}
export default NavBar