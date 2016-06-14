import React from 'react';
import Transition from 'react/lib/ReactCSSTransitionGroup';
import { Link } from 'react-router';
import Modal from './modal/modal.jsx';
import './layout.less';

const Layout = React.createClass({
  getInitialState() {
    return {
      showModal: false
    }
  },

  handleClick() {
    this.setState({
      showModal: !this.props.showModal
    });
  },

  render() {
    return (
      <div id="layout">
      <nav role="navigation">
        <ul role="menu">
          <li role="menu-item"><Link to="/">Home</Link></li>
          <li role="menu-item"><Link to="/about">About</Link></li>
          <li role="menu-item"><button onClick={ this.handleClick }>Modal</button></li>
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
        { (this.state.showModal) ? <Modal handleClick={ this.handleClick } /> : null }
      </div>
    );
  }
});

export default Layout
