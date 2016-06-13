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
        className="modal-overlay"
        transitionName="overlay"
        transitionAppear={ true }
        transitionAppearTimeout={ 500 }
        transitionEnterTimeout={ 500 }
        transitionLeaveTimeout={ 500 }
      />
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
            <p>The close button isn't hooked up</p>
            <p>Try refactoring the component so the close button closes the dialog with a transition</p>
            <button onClick={ this.props.handleClick }>Close</button>
          </div>
        </Transition>
      </div>
    );
  }
});

export default Modal;