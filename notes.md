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


