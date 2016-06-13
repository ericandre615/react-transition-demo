'use strict';

import React from 'react';
import List from '../list/list.jsx';
import './home.less';

const items = [
  { title: 'First Item' },
  { title: 'Second Item' },
  { title: 'Third Item' },
  { title:'Fourth Item' },
  { title: 'Fifth Item' }
];

const Home = React.createClass({
  render() {
    return (
      <section id="home">
        <List items={ items } />
      </section>
    );
  }
});

export default Home;
