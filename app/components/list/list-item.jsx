'use strict';

import React from 'react';

const ListItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    handleRemove: React.PropTypes.func.isRequired
  },

  handleRemove(i) {
    this.props.handleRemove(i);
  },

  render() {
    return( 
      <li className="list-item" onClick={ this.handleRemove.bind(this, this.props.id) }>
        { this.props.title }
      </li>
    );
  }
});

export default ListItem;
