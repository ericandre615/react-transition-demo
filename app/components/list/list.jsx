'use strict';

import React from 'react';
import Transition from 'react/lib/ReactCSSTransitionGroup';
import ListItem from './list-item.jsx';

const List = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  getInitialState() {
    return {
      items: this.props.items
    }
  },

  handleRemove(id) {
    let newItems = this.state.items.slice();
    newItems.splice(id, 1);
    console.log(newItems);
    this.setState({items: newItems});
  },

  render() {
    let itemlist = this.state.items.map((item, i) => {
      return (<ListItem
        id={ i }
        title={ item.title }
        key={ item.title }
        handleRemove={ this.handleRemove }
      />);
    });

    return(
      <Transition className="list" component="ul"
        transitionName="list-item"
        transitionEnterTimeout={ 500 }
        transitionLeaveTimeout={ 500 }
      >
        { itemlist }
      </Transition>
    );
  }
});

export default List;
