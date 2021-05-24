import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

class Header extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth;

    const userLinks = (
      <li className='navbar-item'>
        <div>
          {user ? user.username : ''}

          <div className='navbar-item'>
            <a onClick={this.props.logout} className='nav-link'>
              Logout
            </a>
          </div>
        </div>
      </li>
    );

    const guestLinks = (
      <ul className="navbar-nav me-auto">
        <li>
        <Link to='/register' className='navbar-item nav-link'>
          Sign Up
        </Link>
        </li>
        <li>
        <Link to='/login' className='navbar-item nav-link'>
          Login
        </Link>
        </li>
      </ul>

    );

    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <p>ProvidersApp</p>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to='/' className="nav-link">
                  <p>Home</p>
                </Link>
              </li>
              {isAuthenticated ? userLinks : guestLinks}
            </ul>

          </div>

        </div>
      </nav>



    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
