import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

// Import the reducer and create a store
import { reducer } from './todoListRedux'


// Import the App container component
import App from './App'

const store = createStore(reducer)

// Pass the store into the app container
render(<App store={store} />,  document.getElementById('root'));