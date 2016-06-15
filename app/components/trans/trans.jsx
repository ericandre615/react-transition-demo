import React from 'react';
import ReactDOM from 'react-dom';

const Transition = React.createClass({
  componentWillAppear(cb) {
    let el = ReactDOM.findDOMNode(this);
    console.log(`${el} is appearing`);
    Object.assign(el.style, {
      backgroundColor: '#eaeaea',
      position: 'absolute',
      bottom: '0px',
      boxShadow: '0px 0px 4px 2px grey',
      padding: '2em'
    });
    
    let anim = setInterval(() => {
      let val = parseInt(el.style.bottom.toString().replace('px', ''), 10);
      el.style.bottom = `${val + 1}px`;
    }, 1);

    setTimeout(() => {
      clearTimeout(anim);
      cb();
    }, 800);
  },

  componentDidAppear() {
    console.log(`${this} component has appeared`);
  },

  componentWillEnter(cb) {
    let el = ReactDOM.findDOMNode(this);
    console.log(`${el} is entering`);
    setTimeout(cb, 800);
  },

  componentWillLeave(cb) {
    let el = ReactDOM.findDOMNode(this);
    console.log(`${el} is leasving`);
    setTimeout(cb, 800);
  },
  render() {
    return (
      <div>
        This is some simple text div
      </div>
    );
  }
});

export default Transition;
