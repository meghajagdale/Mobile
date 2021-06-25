import React from 'react'
import { Provider } from 'react-redux'
import JokesList from './src/Screen/JokesList'
import store from './src/Store'

export default () => (
        <Provider store={store}>
            <JokesList />
        </Provider>
)