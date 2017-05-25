import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { addTodo } from './actions'

import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

store.dispatch(addTodo('Yeah!! HHLAB!!'))
store.dispatch(addTodo('Yeah!! Redux!'))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
