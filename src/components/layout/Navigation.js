 import React, { Component } from 'react';
 import {Link} from 'react-router-dom';
class Navigation extends Component {
   render() {
     return (
       <React.Fragment>

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link to="/" className="navbar-brand" >KitsuSearch</Link>
    </div>
    <ul className="nav navbar-nav navbar-right">
      <li className="active"><Link to="/about">about</Link></li>
      </ul>
  </div>
</nav>

       </React.Fragment>
     )
   }
 }
 
 export default Navigation;