import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    DropdownItem } from 'reactstrap';
import { NavLink as NavLinkRouter} from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      open: true,
      scrollingLock: false
    };
  }


  componentDidMount(){
    this.threshold = ReactDOM.findDOMNode(this).offsetTop;
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > this.threshold) {
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < this.threshold) {
      this.setState({
        scrollingLock: false
      });
    }

}

  toggleNavbar() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
      return (
<Navbar color="light" light expand="md" className={'navbar-sticky border' + (this.state.scrollingLock ? " stick" : "")}>
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.open} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/home" activeClassName="active" tag={NavLinkRouter}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/publications" activeClassName="active" tag={NavLinkRouter}>Publications</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" activeClassName="active" tag={NavLinkRouter}>Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  CV
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/WeinanShi-CV.pdf" target="_blank">
                    English Version
                  </DropdownItem>
                  <DropdownItem href="/石伟男-简历.pdf" target="_blank">
                    中文版
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      )}
}

export default Menu;
