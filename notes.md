# React Transitions
## notes

### Key points
- use ReactCSSTranstionGroup
  - react-addons-css-transition-group
  - `react/lib/ReactCSSTransitionGroup`
- OR build your own
  - event listeners for `transitionend` (vendor-prefixes for full support)
  - use lower level api `ReactTransitionGroup`
- Elements must have `key` attribute/prop
  - Must be unique
  - Needs to be static
- FirstChild and component prop
### API
disable 
 - transitionEnter={ false }
 - transitionLeave={ false }

1.
There are two APIs for React Transitions.
 - Low Level - ReactTransitionGroup
 - High Level - ReactCSSTransitionGroup

2. ReactCSSTransitionGroup
 - import
  - `const ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');`
  - `import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
  - `import TransitionGroup from 'react-addons-css-transitions-group';

* react-addons-css-transitions-group package is just a reference to react/lib/ReactCSSTransitionGroup

3. Attributes/Properties
 - key (required) - component identifier, unique but static
 - transitionName - applies to created classes
 - component - default span
 - transitionAppear - boolean
 - transitionEnter - boolean
 - transitionLeave - boolean
 - transitionAppearTimeout - number, time in ms, match css transition time
 - transitionEnterTimeout - number, time in ms
 - transitionLeaveTimeout - number, time in ms

4. Classes

 - .transitionName-enter
 - .transitionName-enter.transitionName-enter-active 
 - .transitionName-leave
 - .transitionName-leave.transitionName-leave-active

