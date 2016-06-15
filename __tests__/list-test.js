jest.unmock('../app/components/list/list.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import List from '../app/components/list/list.jsx';

describe('List Component', () => {
  let items = [{title: 'Some value'}, {title: 'Second Element'}];
  const listComponent = <List items={ items } />;
  const list = TestUtils.renderIntoDocument(listComponent);
  const listNode = ReactDOM.findDOMNode(list);
  it('should be a valid React Component', () => { 
    expect(TestUtils.isElement(listComponent)).toBe(true);
  });
});
