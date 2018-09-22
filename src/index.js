import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import NotFound from './NotFound'
import reducer from './reducer'
import {createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EnterLogin from './containers/EnterLogin'
import TasksContainer from './containers/TasksContainer'
import TaskDetailsContainer from './containers/TaskDetailsContainer'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));
var browserHistory=BrowserRouter.browserHistory

ReactDOM.render(

<Provider store={store}>
    <BrowserRouter history={browserHistory}>
        <Switch>
            <Route exact path='/' component={EnterLogin} />
            <Route exact path='/list' render={(props)=><TasksContainer />} />
            <Route path='/list/:id' component={TaskDetailsContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root')

);

export {store};