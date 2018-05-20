import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

// Define action types
const types = {
  INCREMENT: 'INCREMENT',
}

// Define a reducer
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return {count: state.count + 1}
  }
  return state
}

// Define the initial state of our store
const initialState = {count: 0}

// Create a store, passing our reducer function and our initial state
const store = createStore(reducer, initialState)


/// We're done! Redux is all set up. Here's how we can use it:


// Now we can dispatch actions, which are understood by our store/reducer
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})

// Calling `store.getState()` returns our state object
class App extends Component {
  render() {
    return (
      <div style={{fontSize: 100}}>
        {store.getState().count}
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
