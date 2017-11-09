import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import counterApp from './reducers'
import { Router, Route, browserHistory, IndexRoute } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

let store = createStore(counterApp)

render(
    <Provider store={store}>
        <Counter />
    </Provider>, 
    document.getElementById('app')
)