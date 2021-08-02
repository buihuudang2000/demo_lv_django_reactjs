import React, {Component} from 'react';


class Nav extends Component {
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
                <li><a href="#">Product</a></li>
                <li><a href="#">Payment</a></li>
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