import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import JokesReducers from './Reducers/JokesReducers'
import jokeSaga from './Actions/JokesAction'

const reducers = combineReducers({
    jokesReducers: JokesReducers
})

const saga = createSagaMiddleware()

export default createStore(reducers, applyMiddleware(saga))
saga.run(jokeSaga)


