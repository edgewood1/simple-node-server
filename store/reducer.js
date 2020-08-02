const INITIAL_STATE = {
  tasks: [],
  show_hidden: false,
  user: "mel",
  nextId: 0,
  message: "you currently have no items.  Please create one.", 
  route: true, 
  tab: 'home', 
 
}
var { compose, createStore, combineReducers, applyMiddleWare } = require("redux");
// reducer function
function reducer(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  switch(action.type) {
    case 'INCREMENT': 
      return state = state + 1
    case 'DECREMENT': 
      return state = state - 1
    case 'ODD': 
      return state = state + 1
    case 'ASYNC': 
      return state = state + 1
    default: 
      return state
}
}

var store = createStore(reducer);
//any changes occur? call function that is in argument
store.subscribe(render)

function render() {
  console.log(store.getState().toString())
}


// exports.reducer = reducer;
exports.store = store;
