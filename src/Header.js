import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Nav, NavItem} from "react-bootstrap"
import './Header.css';

class Header extends Component {
    navSelected = '1';
    content = 'home';
    one = '/';
    handleSelect(selectedKey) {
        this.navSelected = `${selectedKey}`;
        switch(selectedKey) {
            case '1':
                this.content = 'home';
                break;
            case '2':
                this.content = 'books by category';
                break;
            case '3':
                this.content = 'books by category and phone'
                break;
            default:
                this.content = 'wrong page';
                break;
        }
      } 
      
    render() {
        return (
            <div className="headerCont">
            <h1>{this.content}</h1>
            <Nav bsStyle="tabs" activeKey={this.navSelected} onSelect={k => this.handleSelect(k)}>        
                <NavItem eventKey="1" componentClass={Link} href={this.one} exact to={this.one}>
                    home
                </NavItem>
                <NavItem eventKey="2" componentClass={Link} href="/borrowed_books_by_cat" to="/borrowed_books_by_cat">
                    books by category
                </NavItem>
                <NavItem eventKey="3" componentClass={Link} href="/borrowed_books_by_cp" to="/borrowed_books_by_cp">
                    books by category and phone
                </NavItem>
            </Nav>
            </ div>
        );
    }
    
}
export default Header;