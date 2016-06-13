'use strict';

import React from 'react';
import List from '../list/list.jsx';
import './about.less';

const items = [
  { title: 'About: First Item' },
  { title: 'About: Second Item' },
  { title: 'About: Third Item' },
  { title:'About Fourth Item' },
  { title: 'About Fifth Item' }
];

const About = React.createClass({
  render() {
    return (
      <section id="about">
        <List items={ items } />
      </section>
    );
  }
});

export default About;
