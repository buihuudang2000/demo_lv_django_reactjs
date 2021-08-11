import React, {Component} from 'react';
import { useEffect, useState } from 'react';


class Nav extends Component {
 
    setActiveNav(pageIndex){
        if (pageIndex==this.props.page) return "active";
        else return "nonactive";
    };
  
    render() {
        return (
       
            <nav className="navbar navbar-inverse bg-primary">
            <div className="container-fluid">
                <div className="navbar-header">
    
                <a className="navbar-brand" href="#"> 
                WebDemo
                </a>
                
                </div>
                <ul className="nav navbar-nav">
                <li className={this.setActiveNav("products")}><a href="/products">Product</a></li>
                <li className={this.setActiveNav("payment")}><a href="/payment">Payment</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
            </nav>

                       
            
        
        );
    }
}

export default Nav;