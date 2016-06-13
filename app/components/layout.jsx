import React from 'react';
import Transition from 'react/lib/ReactCSSTransitionGroup';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './layout.less';

const Layout = React.createClass({
  render() {
    return (
      <div id="layout">
      <nav role="navigation">
        <ul role="menu">
          <li role="menu-item"><Link to="/public">Home</Link></li>
          <li role="menu-item"><Link to="/about">About</Link></li>
        </ul>
      </nav>
        <Transition
          component="div"
          transitionName="page-transition"
          transitionEnterTimeout={ 400 }
          transitionLeaveTimeout={ 600 }
        >
          {
            React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })
          }
        </Transition>
      </div>
    );
  }
});

export default Layout
