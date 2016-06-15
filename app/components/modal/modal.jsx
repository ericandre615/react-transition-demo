'use strict';

import React from 'react';
import Transition from 'react/lib/ReactCSSTransitionGroup';

const Modal = React.createClass({
  propTypes: {
    handleClick: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div>
      <Transition 
        component="div"
        key="overlay"
        transitionName="overlay"
        transitionAppear={ true }
        transitionAppearTimeout={ 800 }
        transitionEnter={ false }
        transitionLeave={ false }
      >
      <div className="modal-overlay"></div>
      </Transition>
        <Transition 
          component="div"
          key="modal"
          transitionName="modal"
          transitionAppear={ true }
          transitionAppearTimeout={ 500 }
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 500 }
        >
          <div className="modal-body">
            <h3>Modal Dialog</h3>
            <p>You've reached the end of the demo.</p>
            <p>Try refactoring the code with some new transitions and components</p>
            <button onClick={ this.props.handleClick }>Close</button>
          </div>
        </Transition>
      </div>
    );
  }
});

export default Modal;
